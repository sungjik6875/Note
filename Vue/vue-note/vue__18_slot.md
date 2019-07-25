#### Slot

------

> 컴포넌트 베이스로 웹을 제작하다 보면 형식이 비슷하지만 컨텐츠가 다른 컴포넌트를 여러개 제작해야 하는 경우도 있을 수 있다. 이런 경우 각각의 컴포넌트를 별개로 제작할 수고를 슬롯을 이용하여 덜어줄 수 있다.
>
> 컴포넌트 정의 부분에서는 컴포넌트의 양식만 정의하고, 컴포넌트를 호출하는 상위 컴포넌트에서 양식에 들어갈 내용을 정의하면 훨씬 편리할 것이다. 이를 가능하게 하는 것이 뷰에서 제공하는 슬롯이다. 슬롯은 컴포넌트의 재사용성을 증가시킨다는 장점이 있다.
>
> 슬롯의 사용 예시를 보자.



> UserProfile이라는 컴포넌트는 UserView와 ItemView에서 모두 호출된다. 그러나 두 상위 컴포넌트에서 요구하는 컨텐츠는 다르다. 이를 Props를 활용하여 데이터를 분기시킬 수도 있겠으나 슬롯을 활용하여 데이터를 호출하는 상위 컴포넌트에서 정의해줄 수 있다.
>
> 슬롯을 활용하여 userName, time, karma 슬롯을 UserProfile 컴포넌트에 다음과 같이 정의한다.

```vue
<!-- UserProfile.vue -->

<template>
  <div class="user-container">
    <div>
      <i class="fas fa-user"></i>
    </div>

    <div class="user-description">
      <!-- userName slot -->
      <slot name="userName">
        <!-- 내용은 호출되는 상위 컴포넌트에서 정의한다. -->
      </slot>
	
      <!-- userName slot -->
      <div class="time">
        <slot name="time">
          <!-- 내용은 호출되는 상위 컴포넌트에서 정의한다. -->
        </slot>
      </div>
    
      <slot name="karma">
        <!-- 내용은 호출되는 상위 컴포넌트에서 정의한다. -->
      </slot>      
    </div>
  </div>
</template>
```



> 슬롯을 통해 컴포넌트의 양식을 정의하였으니 두 상위 컴포넌트에서 다음과 같이 호출하면 된다.

```vue
<!-- ItemView.vue -->

<user-profile>
  <div slot="userName">
    {{ fetchedItem.user }}
  </div>

  <template slot="time">
	{{ 'Posted ' + fetchedItem.time_ago }}
  </template>
</user-profile>
```

> ItemView 컴포넌트에서는 karma가 없으므로 karma는 정의하지 않아도 된다. 이런 경우 UserProfile에서 default로 정의한 부분이 대신 렌더링된다. 이 예시에서는 따로 정의하지 않았기 때문에 렌더링 되지 않을 것이다. 



```vue
<!-- UserView.vue -->

<user-profile>
  <div slot="userName">
    {{ userName.id }}
  </div>

  <template slot="time">
    {{ 'Joined ' + userName.created + ',' }}
  </template>

  <span slot="karma">
    Karma : {{ userName.karma }}
  </span>
</user-profile>
```

> UserView 컴포넌트에서는 karma 정보가 있으므로 전부 정의하였다.  또한 슬롯을 정의할 때에는 태그를 정의하지 않기 때문에 상위 컴포넌트에서 각 슬롯에 넣을 태그도 자유롭게 정의할 수 있다.