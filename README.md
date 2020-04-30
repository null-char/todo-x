# TodoX — A Todo App built with Vue + Vuex + TS

## Intro

This is an exemplary app built with Vue. It was a real pain finding a viable typesafe solution for setting up a Vuex store but the [vuex-module-decorators](https://github.com/championswimmer/vuex-module-decorators) makes typesafe Vuex stores a breeze. I implore you to check it out.

The other library that I used of note is the [vue-class-component](https://github.com/vuejs/vue-class-component) library. I believe the debate of using class-based vs standard vuejs api is mostly a matter of preference. If you don't mind using a lot of decorators and organizing your code using OOP, class-based syntax is great and provides more support (in my opinion) for TS than the standard Vue 2.x api does.

## Decorators

This codebase makes heavy use of decorators — an **experimental** feature of TypeScript and a feature in [stage 2 proposal](https://github.com/tc39/proposal-decorators) for JavaScript. In my opinion, decorators provide a really nice interface to work with. They're an abstraction that seems confusing at first (almost looks like magic) but once you understand how decorators are implemented (see the [TS Docs](https://www.typescriptlang.org/docs/handbook/decorators.html) to learn more) it really becomes quite apparent how much decorators help in making your code concise and readable. I would definitely recommend checking them out.

## Testing

I haven't gotten to implementing any unit tests/e2e tests yet. I do intend to implement testing eventually though. Testing is a domain that I'm still learning about. Keep that in mind in case you find my tests to be poorly written.

## Contributions

Contributions of any kind are welcome! I don't quite want to extend the app's feature spec though. This is really more so a demo of a front end Vue app built using TypeScript and the state management library Vuex. Its main purpose is to demonstrate how you would go about tying all of these technologies together.
