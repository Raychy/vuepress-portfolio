---
template: BlogPost
path: /my-
date: 2021-01-20T07:08:53.137Z
title: 7 most important Flutter updates for 2020 you cannot miss.
thumbnail: /assets/flut.png
metaDescription:  7 most important Flutter updates for 2020 you cannot miss.
---

#  7 most important Flutter updates for 2020 you cannot miss.

2020 has been overall a pretty difficult year however it has been great in terms of Flutter development. Right at the beginning of the year, Flutter has achieved a symbolic milestone of surpassing React Native — its closest competitor — in the number of GitHub stars. Later over the year, three major (semver minor) versions of the framework have been released. In this article, I will recap the most important of those changes as well as some related changes in the Flutter ecosystem.

## Navigator 2.0

Probably the most important new feature of this year is Navigator 2.0. The new navigator is actually an extension introducing additional declarative API to the existing imperative navigation. There are two main advantages of the new API. The first of them is more control over the navigation stack.
Some navigation actions were difficult or awkward to implement using the old imperative API. Those difficult actions include:

* Pushing multiple pages
* Modifying the navigation stack in the middle
* Handling events that can launch the app i.e. intents and push notifications.

All of those cases are now much simpler to handle using the new declarative API. Access to the stack allows for an arbitrary number of pages to be added at arbitrary positions solving the first two issues. Inverted dependency between navigation stack and navigator resolves the issue of an unavailable navigator at the start of the application thus eliminating the need to handle intents and push notifications differently when the app is running and starting.
The second advantage i
s better integration with platform routing which is especially useful in Flutter for web. In Flutter for web application users can arbitrarily change route using the navigation bar. Thanks to separate RouteInformationParser handling of those unexpected route changes is much cleaner.

# Autofill

Another new feature added this year is the support for autofill in forms. Autofill was one of the few platform-specific APIs that until recently have not been accessible in Flutter apps. Now with just a couple of lines of code, we can allow platform services to save and fill credentials and other data entered by users.

## Material widgets updates

New functionalities aren’t the only noteworthy changes in the framework. During this year material package has been expanded with new widgets and updated to match new Material guidelines. New widgets introduced this year are:

* NavigationRail
* InteractiveViewer

while updated widgets include:

* DatePicker
* TimerPicker
* Slider
* RangeSlider