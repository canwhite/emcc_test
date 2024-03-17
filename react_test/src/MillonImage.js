import { block } from 'million/react';
 
/*********************************************************
 * 
millonjs的实现原理：

1）使用单一树结构：Millon.js 使用单一树结构来表示虚拟 DOM，
而 React 默认使用双树结构。单一树结构可以减少 DOM 操作的数量，从而提高渲染效率。

2）使用哈希表来存储节点：Millon.js 使用哈希表来存储虚拟 DOM 中的节点，
而 React 默认使用链表来存储节点。哈希表可以提高节点查找的效率，从而提高渲染效率。

3）使用惰性渲染：Millon.js 默认使用惰性渲染，
而 React 默认使用 eager（adj 渴望的） 渲染。惰性渲染可以减少不必要的 DOM 操作，
从而提高渲染效率。

PS:所谓_惰性渲染：
使用 useRef 钩子来保存真实 DOM 节点的引用，就是div上挂载的ref
使用 useMemo 钩子来缓存虚拟 DOM 中的节点



function App() {
  const data = [1, 2, 3, 4, 5];

  return (
    <div>
      <For data={data}>
        {(item, index) => (
          <div key={index}>{item}</div>
        )}
      </For>
    </div>
  );
}

*/


//just block
const MillonImage = block(
  //这个Lion是原来的组件，该什么样，还是什么样
  function Lion() {
    // alt提供文本描述
    return <img src="https://million.dev/lion.svg"  alt=''/>;
  }
);

export default MillonImage;