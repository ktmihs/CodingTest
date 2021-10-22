class Node{
    constructor(){
    this.end = false
    this.child = {}
    this.cnt=0
    }
}
class Trie{
    constructor(){
        this.root=new Node()
    }
    insert(word){
        let cur=this.root
        for(let x of word){
            if(cur.child[x]===undefined){
                cur.child[x]=new Node()
            }
            cur=cur.child[x]
            cur.cnt++
        }
        cur.end=true
        // 단어의 끝임을 알려줌
    }
    getCount(word){
        let cur=this.root
        let Count=0
        for(let x of word){
            Count++
            cur=cur.child[x]
           if(cur.cnt===1) return Count
        }
        return Count
    }
}
function solution(words) {
    var answer = 0
    let mT=new Trie()
    for(let word of words) mT.insert(word)
    for(let word of words){
        answer+=mT.getCount(word)
    }
    return answer
}