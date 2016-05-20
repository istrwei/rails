---
layout: post
title: "关于 Heroku Cedar-14 的说明"
date: 2014-11-05 14:10
---

Heroku 于近日[升级了低层组件](https://blog.heroku.com/archives/2014/11/4/cedar_14_now_generally_available)，如果你使用 [Cloud9](http://c9.io/) 可能会受到影响。当然，如果你在自己的设备中开发也可能有影响。如果部署到 Heroku 时遇到以下错误，请按照本文的方法升级 Ruby 到 2.1.4 版。


    local/Cloud9 => Your Ruby version is 2.1.1, but your Gemfile specified 2.1.4

    Heroku => Only the most recent version of Ruby 2.1 is supported on Cedar-14


为了本书读者着想，原版作者 Michael 已经联系 Cloud9，希望能把 Rails 教程使用的工作空间默认使用的 Ruby 升级到 2.1.4。在 Cloud9 升级之前，你可以自行升级。Cloud9 使用 [rvm](http://rvm.io/) 管理 Ruby，所以可以在 Cloud9 的命令行中执行下面的命令升级 Ruby：


    $ rvm install 2.1.4
    $ rvm use 2.1.4


如果编译 Ruby 的时间过长（超过 20 分钟），请换用下面的命令（[via](http://stackoverflow.com/questions/26069506/ruby-2-1-3-installation-in-ubuntu-14-04-1-hang/26151026#26151026)）：


    $ rvm install 2.1.4 -- --with-setjmp-type=setjmp

然后把 `Gemfile` 中的 Ruby 版本改为 `2.1.4`，再重新部署：


    $ git commit -am "Update Ruby version"
    $ git push heroku


如果你在本地设备中使用 `rbenv`，可以使用下列命令升级 Ruby：


    $ cd ~/.rbenv/plugins/ruby-build/
    $ git pull
    $ rbenv install 2.1.4

同样，如果编译时间过长，请换用下面的命令安装：

    $ RUBY_CONFIGURE_OPTS="--with-setjmp-type=setjmp" rbenv install 2.1.4

（本文编译自 [Rails Tutorial 的博客](http://news.railstutorial.org/heroku-update/)。）
