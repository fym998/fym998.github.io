---
publishDate: 2025/10/17
description: 说明如何在 Firefox 中设置（伪装）地理位置，即 Geolocation API 调用的结果
title: 在 Firefox 中设置（伪装）地理位置
aliases:
  - 在 Firefox 中设置（伪装）地理位置
tags:
  - firefox
  - github
---
# 在 Firefox 中设置（伪装）地理位置
GitHub 学生认证快过期了，重新认证的时候发现要共享地理位置，这个位置是网页的 JavaScript 通过 Geolocation API 获取的，而 Firefox 又通过谷歌的 API 来返回结果。

但是，在中国大陆，因为众所周知的网络问题，这个 API 无法直接访问。能访问的办法会让源 IP 变成外国的，副作用是返回值也会变成外国的地址，这样学生认证就不那么好过了。

一通搜索后，发现 `about:config` 里的 `geo.provider.network.url`（默认值为 `https://www.googleapis.com/geolocation/v1/geolocate?key=%GOOGLE_LOCATION_SERVICE_API_KEY%`）不仅可以控制使用的 API，还能将其设为 Data URL，这样无需手搓 API 就能任意设置地址啦。[^1]

例如，如果你的学校在故宫里，改成 `data:application/json,{"location":{"lat":39.916927,"lng":116.390812},"accuracy":100.0}` 就好了。

[^1]: https://www.aiseesoft.com/solution/firefox-change-location.html
