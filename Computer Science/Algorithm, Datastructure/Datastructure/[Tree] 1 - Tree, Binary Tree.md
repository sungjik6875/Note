### 트리 (Tree)

------

> 트리는 0개 이상의 다른 노드에 대한 레퍼런스(또는 포인터)가 들어있는 노드로 구성된다. 하나의 노드를 참조하고 있는 노드는 하나 뿐이다. 그러나 연결 리스트와 다르게 하나의 노드는 한 개 이상의 노드를 참조할 수 있다.



#### 트리의 구현

> 연결 리스트와 같이 구현은 트리를 구성하는 각 노드를 구조체나 클래스로 표현하는 방식으로 구현한다. 트리는 포인터나 레퍼런스만 있다면 어떤 언어로든 구현이 가능하다. 객체지향 언어에서는 보통 노드의 공통적인 부분을 하나의 클래스로 정의하고, 노드에 들어가는 데이터를 위해 서브클래스를 만들어서 사용한다.
>
> 노드가 참조하는 자식노드를 children이라 하면, children은 여러 개가 가능하므로 보통 배열로 선언하며 비공개(private)로 선언한다. 대신 그 children 배열을 건드리기 위한 메서드만 공개하는 방법을 사용한다. 이를 Java 코드로 구현하면 다음과 같다.

```java
// 트리를 구성하는 각 노드를 클래스로 구현한다.
public abstract class Node {
    // 자식 노드
    private Node[] children;
    
    // 노드 생성자
    public Node(Node[] children) {
        this.children = children;
    }
    
    // 자식 노드의 개수를 반환하는 메소드
    public int getNumChildren() {
        return children.length;
    }
    
    // 특정 자식 노드를 반환하는 메소드
    public Node getChild(int index) {
        return children[index];
    }
}

// 각 노드의 데이터는 서브 클래스로 구현한다.
public class IntNode extends Node {
    // 노드 데이터
    private int value;
    
    // 노드 생성자
    public IntNode(Node[] children, int value) {
        super(children);
        this.value = value;
    }
    
    // 노드의 데이터를 반환하는 메소드
    public int getValue() {
        return value;
    }
}
```



#### 용어

> 트리의 구조를 표현하기 위한 용어들은 다음과 같다.

##### 루트 노드

> 다른 모든 노드로 가는 경로가 존재하는 유일한 노드

##### 부모 노드

> 특정 노드를 참조하고 있는 노드

##### 자식 노드

> 특정 노드가 참조하고 있는 노드

##### 자손 노드

> 특정 노드로부터 자식노드로 이어지는 경로를 따라 도달할 수 있는 모든 노드

##### 조상 노드

> 특정 노드를 자손으로 삼고 있는 노드

##### 리프 노드

> 자식 노드가 없는 노드





### 이진 트리 (Binary Tree)

------

> 보통 트리라고 할 경우 이진 트리를 의미하는 경우가 많다. 이진 트리에서는 하나의 노드가 최대 두 개의 자식 노드를 가질 수 있다. 이 두 개의 자식 노드를 각각 왼쪽 자식, 오른쪽 자식 노드라 한다.



#### 이진 트리의 구현

> 자식노드는 private으로 구현한다. 만약 없으면 null로 처리한다. 이를 Java로 구현하면 다음과 같다. 예시에서는 데이터도 하나의 클래스에 모두 통합하여 구현하였다.

```java
public class Node {
    private Node left;
    private Node right;
    private int value;
    
    public Node(Node left, Node right, int value) {
        this.left = left;
        this.right = right;
        this.value = value;
    }
    
    public Node getLeft() { return left; }
    public Node getRight() { return right; }
    public int getValue() { return value; }
}
```
