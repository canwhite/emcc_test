import {createStore} from 'zustand/vanilla';
import { useStore } from 'zustand'
import {produce} from 'immer';
// import equal from "fast-deep-equal"
import {useMount} from "ahooks"
import { useMemo,useState } from 'react';
import {createSelector} from "reselect";
import useEvent from './hooks/useEvent';


const store = createStore(()=>({
    todos:[]
}));


const requestTodos = async ()=>{
    //假设requst到todos
    const todos = [
        {
            key:"1",
            todo:"coding",
        },
        {
            key:"2",
            todo:"eating",
        },
        {
            key:"3",
            todo:"playing"
        }
    ];
    //往sotre里写，这里相当于发布者发布
    store.setState(produce((draft)=>{
        draft.todos = [...todos];
    }));
}

export const useTodos = ()=>{
    useMount(()=>{
        //实际上我们是让它set就可以了
        requestTodos();
    });

    //用useMemo取代store.todos这一property直接获取,做了优化
    //useStore相当于订阅，而getState只是store对象的一个get方法而已，
    //so，整体来说，useStore能力更强，是在getState的基础上封装的
    return useStore(store,useMemo(()=>(state)=>state.todos,[]));
    // return store.getState().todos;  //注意这只是一个方法执行，并不是基于发布订阅
}


export const useTodoItem = (key)=>{
    useMount(()=>{
        store.getState().todos.length === 0 && requestTodos()
    });
    //filter返回多个，是所有满足条件的数组，而find返回第一个满足条件的对象
    // return useStore(store,useMemo(()=>(state)=>state.todos.filter((item=>item.key === key)),[key]));
    // 这里只监听key，todos来自于参数，依赖简单可以减少因数据变更导致的渲染
    return useStore(store,useMemo(()=>(state)=>state.todos.find((item=>item.key === key)),[key]));
}


// 这种是不需要存的情况
const requestTodosOnly = async ()=>{
    //假设requst到todos
    const todos = [
        {
            key:"1",
            todo:"coding",
        },
        {
            key:"2",
            todo:"eating",
        },
        {
            key:"3",
            todo:"playing"
        }
    ];
    //这里直接返回，就不需要往store里写了
    return todos;
}
//如果值只在一个地方使用，每次都需要最新值，那就可以不用缓存，我们可以换另外一种方法去得到
export const useTodosOnly = ()=>{
    const [result,setResult] = useState();

    //TODO：useMount（挂载节点的时候使用） vs useFocusEffect（
    //useFocusEffect更多的是在切换Screen的时候加载状态和触发买点之类的
    useMount(()=>{
        (async ()=>{
            const data = await requestTodosOnly();
            setResult(data);
        })()
    });

    return result;
}

//optimize a normal get function
//可以这样取值，也可以sotre.getState().todos
export const getMapFromTodos = createSelector(()=>store.getState().todos,(todos)=>{
    return new Map(todos.map((item)=>[item.key,item.todo]));
})


//return function
export const useTodosFilter =()=>{
    const filter = useEvent((key,cb)=>{
        if(key === "1"){
            cb?.();
        }
        return store.getState().todos.filter((item)=>item.key === key)
    });
    return filter;
}





