# TodoX — A Todo App built with Vue + Vuex + TS

This is an exemplary app built with Vue. It was a real pain finding a viable typesafe solution for setting up a Vuex store but the [vuex-module-decorators](https://github.com/championswimmer/vuex-module-decorators) makes typesafe Vuex stores a breeze. I implore you to check it out.

The other library that I used of note is the [vue-class-component](https://github.com/vuejs/vue-class-component) library. I believe the debate of using class-based vs standard vuejs api is mostly a matter of preference. If you don't mind using a lot of decorators and organizing your code using OOP, class-based syntax is great and provides more support (in my opinion) for TS than the standard Vue 2.x api does.
