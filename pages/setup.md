---
layout: page
title: 搭建 Rails 环境
body_class: setup-page
permalink: /setup/
---

《Ruby on Rails 教程》使用的 [Cloud9 IDE](https://c9.io) 需要绑定信用卡才能使用，如果想在本地搭建 Rails 环境，可以参照 [Go Rails 网站的指南](https://gorails.com/setup/)。这份指南详细说明了如何在各个版本的 Mac OS X、Ubuntu 和 Windows 中搭建 Rails 环境。

刚接触 Rails 的读者可能觉得自己搭建环境有些难度，此时你可以使用其他在线 IDE。本文说明如何使用 [Coding.net 的 WebIDE](https://ide.coding.net)。

如果没有 Coding.net 的账户，先[注册一个](https://coding.net/register "注册 Coding.net 账户")。注册后，[登录](https://coding.net/login "登录 Coding.net")。

在[个人页面](https://coding.net/user)点击“+ 创建新项目”，在打开的页面中填写项目名称等信息。为了明确项目的作用，可以在项目名称字段中填写“rails-tutorial”。创建私有项目还是公开项目由你自己决定。其他字段保留默认值即可。最后点击“创建项目”按钮。

现在，打开 [Coding.net 的 WebIDE](https://ide.coding.net)，进入“[工作空间](https://ide.coding.net/dashboard)”页面，然后点击“+ 新建工作空间”。此时，在“Coding 仓库”标签页下面会看到你在 Coding.net 网站中的各个项目，如果没看到刚创建的“rails-tutorial”项目，点击右上角的“同步仓库”按钮。

点击你刚创建的“rails-tutorial”项目，配置所需的 CPU、内存和磁盘（我都选择最小值），然后点击下面的“创建”按钮。稍等片刻，你会被重定向到“工作空间”页面。在这里会看到你刚创建的工作空间，点击将其打开。

现在打开的就是真正的 IDE 了。

![WebIDE 界面]({% figure_url setup-1.jpg %})

界面的各部分介绍如下：

1. 文件树
2. 主区域，显示浮动面板、编辑器等。
3. 设置面板
4. 运行环境面板
5. 访问链接面板
6. 终端

大致了解 WebIDE 的界面之后，打开“运行环境”面板（④）。在“运行环境列表”中把鼠标移到“ide-tty-rbenv”上，点击右侧的“使用”按钮，在弹出的对话框中按“确定”。此时，我们的工作空间就使用这个 Ruby 环境了。

![运行环境面板]({% figure_url setup-2.jpg %})

这个环境预装了 Ruby 和 Rails。打开终端（⑥），输入下述命令，查看 Rails 的版本：

```sh
$ rails -v
```

如果看到的版本号与《Ruby on Rails 教程》中的不一致，可以执行下述命令安装所需的版本（以安装 Rails 5.0.0 为例）：

```sh
$ gem install rails -v 5.0.0
```

`-v` 旗标的作用是指定安装哪个 Rails 版本，请把上面的 5.0.0 换成与书中一样的版本号。你使用的版本必须与书中一样，这样在学习的过程中，你得到的结果才与书中相同。

接下来，我们来新建[第 1 章]({{ site.baseurl }}/book/chapter1.html)创建的 hello_app。在终端输入下述命令：

```sh
$ cd ~/workspace # 确保在 workspace 目录中
$ rails _5.0.0_ new hello_app
```

稍等片刻，hello_app 就创建好了。然后跟着教程做就可以了。

这里要说明一下预览应用的方式。打开“访问链接”面板（⑤），端口号可以保持默认值（8080）不变，点击“生成”按钮。此时会生成一个有效期为一个小时的链接。

![访问链接面板]({% figure_url setup-3.jpg %})

然后，回到终端。输入下述命令，启动 Rails 本地服务器：

```sh
$ cd hello_app
$ rails server -b 0.0.0.0 -p 8080
```

其中 `-b` 是监听的 IP 地址，设为 `0.0.0.0` 才能通过外网访问；`-p` 是端口号，要设为前面填写的端口号。

现在，访问前面生成的 URL 就能看到 Rails 的欢迎页面了。

如果想把 WebIDE 中的代码推送到前面创建的项目中，可以在终端执行下述命令（推送前别忘了提交）：

```sh
$ git push origin master
```
