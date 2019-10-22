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





### 이진 탐색 트리 (Binary Search Tree)

------

> 트리 구조를 사용하여 정렬된 자료를 저장하고자 할 때 사용한다. 모든 노드를 기준으로 각 노드의 값은 왼쪽 자손 노드의 값들보다는 크고, 오른쪽 자손 노드의 값들 보다는 작다. 이진 검색 트리의 장점은 특정 값을 탐색하는 연산의 시간 복잡도가 O(logN)에 해당하는 것이다.



#### 탐색 연산 구현

> 루트 노드로부터 시작한다. 노드의 값과 찾고자 하는 값을 비교한다. 값을 찾을 경우 탐색을 종료한다. 다른 경우 왼쪽 혹은 오른쪽 자식노드로 탐색 위치를 변경한다. 자식 노드가 없을 때 까지 탐색한다. 만약 값을 찾지 못한 경우 탐색을 종료한다. 이를 코드로 구현하면 다음과 같다.

```c#
Node findNode(Node root, int value) {
    // 루트 노드로부터 시작, 자식 노드가 없을 때 까지 탐색
	while(root != null) {
        int curval = root.getValue();
        
        // 값을 찾으면 탐색을 종료
        if (curval == value) break;
        
        // 찾지 못하면 값을 비교하고 탐색 위치를 왼쪽, 혹은 오른쪽 자식노드로 변경
        if (curval < value) {
            root = root.getRight();
        } else {
            root = root.getLeft();
        }
    }
   	// 찾은 노드를 반환. 최종적으로 노드를 찾지 못한 경우에는 null이 반환된다.
    return root;
}
```

> 반면 다음과 같이 재귀적으로 구현할 수도 있다.

```c#
Node findNode(Node root, int value) {
    // 최종적으로 노드를 찾지 못한 경우 에는 null이 반환
    if (root == null) return null;
    
    int curval = root.getValue();
    
    // 값을 찾으면 탐색을 종료
    if (curval == value) return root;
    
    // 찾지 못하면 값을 비교하고 탐색 위치를 왼쪽, 혹은 오른쪽 자식노드로 변경
    if (curval < value) {
        return findNode(root.getRight(), value);
    } else {
        return findNode(root.getLeft(), value);
    }
}
```



##### 탐색 연산의 시간 복잡도

> 탐색 연산은 반복문을 한 번 돌 때마다 절반의 노드(왼쪽 자손, 혹은 오른쪽 자손 노드)를 탐색에서 제외한다. 따라서 노드의 개수가 n개 일 때, 균형이 잡힌 이진 검색 트리에서 탐색 연산의 실행 횟수는 최대 1이 나올 때 까지 n을 2로 계속해서 나누는 횟수가 된다. 이는 n에 이를 때 까지 1에 계속하여 2를 곱하는 횟수하고 같으므로 `2^x = n` 로 표현이 가능하다. 
>
> 따라서 탐색 연산의 시간 복잡도는 x와 같다. 이 때 x를 n으로 표현하면 logn이다. 따라서 탐색 연산의 시간 복잡도는 `O(logN)`이다.

> ##### 최악의 경우
>
> 위의 경우는 균형 이진 검색 트리에서의 경우이다. 만약 균형이 잡히지 않은, 각 노드가 오직 하나의 자식 노드만을 갖는 경우를 생각해보면 연결 리스트와 같아지므로 탐색 연산의 시간 복잡도는 `O(N)`이 된다. 이런 경우는 생각보다 자주 발생하는데, 정렬된 데이터를 차례로 삽입하게 되는 경우가 그렇다.

> ##### 응용
>
> 어떤 노드를 기준으로 그보다 다음으로 큰 값을 갖는 노드, 다음으로 작은 값을 갖는 노드를 찾는 연산 역시  `O(logN)`의 수행시간을 통해 구할 수 있다.



##### 삭제, 삽입 연산의 시간 복잡도

> 이진 탐색 트리의 특성 상 값의 삭제, 삽입은 항상 탐색 과정을 선행해야 한다. 삭제의 경우 삭제할 값을 탐색하는 데 소요되는 시간 복잡도가 `O(logN)`에 해당된다. 이후 삭제에 수행되는 시간복잡도는 `O(1)` 에 해당되므로 결국 `O(logN)`이다.
>
> 삽입의 경우 삽입할 위치를 탐색해야 한다. 이 과정에 소요되는 시간 복잡도 역시 `O(logN)`이다. 삽입에 수행되는 시간 복잡도는 `O(1)`이므로 결국 `O(logN)`이다.



##### 기타 연산과 시간 복잡도

> 이 외에도 이진 탐색 트리에서는 왼쪽 자식 노드를 계속 추적하면 가장 작은 값을 찾을 수 있다. 반대로 오른쪽 자식 노드를 계속 추적하면 가장 큰 값을 찾을 수 있다. 또한 `O(n)`의 수행시간을 통해 모든 노드를 정렬된 순서로 출력하는 것이 가능하다.

