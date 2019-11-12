#### Replica Set

------

> Replica Set은 같은 정보를 공유하는 Data Set이다. 참고할 이미지는 다음과 같다.

![example_1](./image/mongodb_13_1.png)

> 위 예시에서 Primary는 클라이언트와 직접적으로 데이터를 교환하는 데이터 셋이다. Primary는 자신의 데이터와 변경사항을 주기적으로(매 2초 마다) Secondary 데이터 셋에다 동기화한다. 이러한 동기화 작업을 HeartBeat라 한다. 만약 어떠한 장애로 인해 동기화가 실패할경우 Oplog에 백업을 해둔 후, 추후에 Secondary 데이터 셋에 반영한다.



##### Replica Set의 목적

* 높은 가용성을 위해서
* 정보의 안전한 보호
* Read 속도를 높이기 위함



> ##### 높은 가용성, 정보의 안전한 보호
>
> 몽고 DB에서 만약 Primary 데이터 셋이 어떠한 장애로 인해 가용이 불가능한 상황이 오면, 새로운 Primary를 선출하는 과정을 거친다. 선출을 통해 Secondary중 하나가 새로운 Primary가 된다. 이러한 방식을 통해 데이터의 가용성을 보장하고, 안전하게 보호할 수 있다.
>
> 선출 방식은 다음과 같다.

![example_2](./image/mongodb_13_2.png)

> Secondary중 과반수의 찬성표를 받는 데이터 셋이 새로운 Primary가 된다. 이때 각 Secondary들이 다른 후보군들에게 찬반을 결정하는 과정은 다음과 같다.

![example_2](./image/mongodb_13_3.png)

> Replica Set은 데이터 보호와 가용성의 측면에서는 유용하나, 추가적인 비용이 든다는 단점이 있다. 따라서 Replica Set에 사용되는 노드의 개수는 상황에 맞게 설정하는 것이 좋다. 다만, 몽고DB는 자체적인 데이터 복구 시스템을 갖추고 있지 않기 때문에  Replica Set을 갖추는 것이 좋다.



> ##### Read 속도를 높임
>
> Secondary 데이터 셋이 단순히 데이터 보호와 백업 용도로만 사용되는 것은 아니다. Primary가 정상적으로 작동하여도 Secondary 데이터 셋을 클라이언트의 Read 요청을 처리하도록 사용할 수 있다. 따라서 Primary가 많은 요청을 처리해야 하는 경우 Primary는 Write 요청을 주로 담당하게 하고 Secondary 들이 Read 요청을 나누어 담당하게 한다. 전체적인 데이터 교환 속도가 향상되기 때문에 사용자들에게 더 신속하게 데이터를 제공할 수 있다. 
>
> 다만 Primary와 Secondary 간의 동기화가 실시간으로 진행되는 것이 아니므로, Read 요청을 통해 받아온 데이터가 반드시 최신 데이터라는 보장은 없다.
>
> 참고용 이미지는 다음과 같다.

![example_2](./image/mongodb_13_4.png)



