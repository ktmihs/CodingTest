function solution(n, k, cmd) {
  const Node = function (index, prev) {
    this.index = index;
    this.prev = prev;
    this.next = null;
  }

  let prevNode = new Node(0, null);
  let select;

  for (let i = 1; i < n; i++) {
    const cntNode = new Node(i, prevNode);
    prevNode.next = cntNode;
    prevNode = cntNode;

    if (i === k) select = cntNode;
  }

  let trashBin = [];

  const moveSelectedNode = (count, direction) => {
    for (let i = 0; i < count; i++) {
      if (!select[direction]) break;    // 최상단까지 가면 종료
      select = select[direction];   // 이전(다음) 노드를 현재 노드로 설정
    }
  }

  const deleteNode = () => {
    const prev = select.prev;
    const next = select.next;

    trashBin.push(select);  // 현재 노드를 삭제 배열에 추가

    select = next ? next : prev;    // 현재 노드가 최하단일 경우, 이전걸 현재로(그 외의 경우는 다음 노드를 현재 노드로 설정)

    // 노드 연결해주기
    if (prev) prev.next = next; // 현재 노드를 제외시켰기 때문에, 이전과 다음을 서로 연결
    if (next) next.prev = prev;
  }

  const recoverNode = () => {
    const targetNode = trashBin.pop();  // 가장 최근에 삭제한 노드를 꺼냄

    const prev = targetNode.prev;
    const next = targetNode.next;

    if (prev) prev.next = targetNode;   // 꺼낸 노드의 이전 노드에 현재 노드 연결
    if (next) next.prev = targetNode;   // 꺼낸 노드의 다음 노드에 현재 노드 연결
  }

  cmd.forEach(c => {
    switch (c[0]) {
      case 'U':
        moveSelectedNode(c.split(' ')[1], 'prev');
        break;
      case 'D':
        moveSelectedNode(c.split(' ')[1], 'next');
        break;
      case 'C':
        deleteNode();
        break;
      case 'Z':
        recoverNode();
        break;
    }
  });

  let result = new Array(n).fill('O');
  trashBin.forEach(node => result[node.index] = 'X');
  return result.join('');
}