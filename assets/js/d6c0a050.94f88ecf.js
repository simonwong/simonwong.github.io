"use strict";(self.webpackChunknote=self.webpackChunknote||[]).push([[2218],{9613:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var i=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=i.createContext({}),m=function(e){var t=i.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=m(e.components);return i.createElement(o.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=m(n),d=a,s=c["".concat(o,".").concat(d)]||c[d]||k[d]||l;return n?i.createElement(s,r(r({ref:t},u),{},{components:n})):i.createElement(s,r({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,r=new Array(l);r[0]=c;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,r[1]=p;for(var m=2;m<l;m++)r[m]=n[m];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7848:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return o},metadata:function(){return m},toc:function(){return u},default:function(){return c}});var i=n(5900),a=n(4750),l=(n(9496),n(9613)),r=["components"],p={},o="Git \u64cd\u4f5c\u6307\u5357",m={unversionedId:"services/git/git\u64cd\u4f5c\u6307\u5357",id:"services/git/git\u64cd\u4f5c\u6307\u5357",title:"Git \u64cd\u4f5c\u6307\u5357",description:"\u4e00\u4e9b\u6982\u5ff5",source:"@site/docs/services/git/git\u64cd\u4f5c\u6307\u5357.md",sourceDirName:"services/git",slug:"/services/git/git\u64cd\u4f5c\u6307\u5357",permalink:"/docs/services/git/git\u64cd\u4f5c\u6307\u5357",tags:[],version:"current",frontMatter:{},sidebar:"services",previous:{title:"\u76ee\u5f55",permalink:"/docs/services"},next:{title:"Gitlab work flow",permalink:"/docs/services/git/gitlab-workflow"}},u=[{value:"\u4e00\u4e9b\u6982\u5ff5",id:"\u4e00\u4e9b\u6982\u5ff5",children:[{value:"\u76f8\u5bf9\u5f15\u7528",id:"\u76f8\u5bf9\u5f15\u7528",children:[],level:3}],level:2},{value:"git \u95ee\u9898\u5904\u7406",id:"git-\u95ee\u9898\u5904\u7406",children:[],level:2},{value:"\u5e38\u7528\u64cd\u4f5c",id:"\u5e38\u7528\u64cd\u4f5c",children:[{value:"\u8fdc\u7a0b\u4ed3\u5e93a",id:"\u8fdc\u7a0b\u4ed3\u5e93a",children:[],level:3},{value:"\u67e5\u770b",id:"\u67e5\u770b",children:[],level:3},{value:"\u5206\u652f",id:"\u5206\u652f",children:[],level:3},{value:"\u5408\u5e76",id:"\u5408\u5e76",children:[],level:3},{value:"\u5206\u79bb<code>HEAD</code>",id:"\u5206\u79bbhead",children:[],level:3},{value:"\u4fee\u6539 commit",id:"\u4fee\u6539-commit",children:[],level:3},{value:"\u64a4\u9500\u53d8\u66f4",id:"\u64a4\u9500\u53d8\u66f4",children:[],level:3},{value:"\u53d8\u57fa",id:"\u53d8\u57fa",children:[],level:3},{value:"\u8d2e\u85cf",id:"\u8d2e\u85cf",children:[],level:3},{value:"tag \u64cd\u4f5c",id:"tag-\u64cd\u4f5c",children:[],level:3}],level:2}],k={toc:u};function c(e){var t=e.components,n=(0,a.Z)(e,r);return(0,l.kt)("wrapper",(0,i.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"git-\u64cd\u4f5c\u6307\u5357"},"Git \u64cd\u4f5c\u6307\u5357"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"http://file.wangsijie.top/18-5-22/91985389.jpg",alt:null})),(0,l.kt)("h2",{id:"\u4e00\u4e9b\u6982\u5ff5"},"\u4e00\u4e9b\u6982\u5ff5"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"HEAD")," \u6307\u5411\u5f53\u524d\u5206\u652f\u4e0a\u6700\u8fd1\u7684\u4e00\u6b21\u63d0\u4ea4"),(0,l.kt)("h3",{id:"\u76f8\u5bf9\u5f15\u7528"},"\u76f8\u5bf9\u5f15\u7528"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"HEAD^"),"\u5411\u4e0a\u79fb\u52a81\u4e2a\u63d0\u4ea4\u8bb0\u5f55"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"HEAD~3"),"\u5411\u4e0a\u79fb\u52a8\u591a\u4e2a\u63d0\u4ea4\u8bb0\u5f55"),(0,l.kt)("h2",{id:"git-\u95ee\u9898\u5904\u7406"},"git \u95ee\u9898\u5904\u7406"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u6bcf\u6b21 push \u90fd\u8981\u8f93\u5165\u8d26\u53f7\u5bc6\u7801 "),(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"}," git config --global credential.helper store")," \u7f13\u5b58\u8d26\u53f7\u5bc6\u7801"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"cat ~/.gitconfig")," \u67e5\u770b\u914d\u7f6e\u7ed3\u679c"),(0,l.kt)("li",{parentName:"ol"},"\u914d\u7f6e ssh"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u4fee\u6539\u4e86 github \u7684\u8d26\u53f7\uff0c\u9700\u8981\u4fee\u6539\u672c\u5730\u4ed3\u5e93\u7684\u914d\u7f6e"),(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"git remote -v")," \u67e5\u770b\u5f53\u524d\u8fde\u63a5\u7684\u8fdc\u7a0b\u4ed3\u5e93"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"git remote rm origin")," \u79fb\u9664 origin"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"git remote add origin git@github.com:simonwong/react-universal-template.git")," \u91cd\u65b0\u5173\u8054"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"git push --set-upstream origin master")," \u8bbe\u7f6e\u4e0a\u6e38")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u8986\u76d6\u4e0a\u4e00\u6b21commit",(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"git commit --amend")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"git commit --amend --reset-author")," ")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"fork \u540e\uff0c\u5982\u4f55\u4e0e\u539f\u4ed3\u5e93\u540c\u6b65",(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"git remote -v")," \u67e5\u770b\u8fdc\u7a0b\u4ed3\u5e93\u7684\u8def\u5f84\uff0c\u5982\u679c\u6ca1\u6709 ",(0,l.kt)("inlineCode",{parentName:"li"},"upstream")," \uff08\u4e0a\u6e38\u4ee3\u7801\u5e93\uff09\uff0c\u7ee7\u7eed"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"git remote add upstream [git \u5730\u5740]")," \u5411\u672c\u5730\u6dfb\u52a0\u4e0a\u6e38\u4ee3\u7801\u5e93"),(0,l.kt)("li",{parentName:"ol"},"\u67e5\u770b\u672c\u5730\u6709\u6ca1\u6709\u9700\u6539\uff0c\u8be5 stash stash \uff0c\u8be5 push push"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"git fetch upstream")," \u66f4\u65b0\u4e0a\u6e38\u4ed3\u5e93"),(0,l.kt)("li",{parentName:"ol"},"\u5207\u5230\u4f60\u8981\u7684\u5206\u652f master \u6216\u8005 feature \u5565\u7684\uff0c\u7136\u540e ",(0,l.kt)("inlineCode",{parentName:"li"},"git merge upstream/master")," \uff08\u5176\u5b9e\u6211\u6709\u70b9\u62c5\u5fc3\u4f1a\u6709 merge \u8282\u70b9\uff0c\u8bd5\u4e86\u4e00\u6b21\u6ca1\u6709\uff0c\u5982\u679c\u6709 merge \u8282\u70b9\uff0c\u53ef\u4ee5\u8bd5\u8bd5 reabse\uff09"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"git push"))))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u6279\u91cf\u5220\u9664\u5206\u652f"),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"git branch |grep 'xxx' |xargs git branch -D")),(0,l.kt)("p",{parentName:"li"},"\u5176\u4e2d ",(0,l.kt)("inlineCode",{parentName:"p"},"git branch |grep 'xxx'")," \u53ef\u4ee5\u67e5\u770b\u6240\u6709\u5339\u914d\u5230 xxx \u7684\u5206\u652f\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"|xargs")," \u662f\u5411\u540e\u4f20\u524d\u9762\u7684\u8fd4\u56de\u7ed3\u679c"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"ssh \u914d\u7f6e\u6d41\u7a0b"),(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},"\u547d\u4ee4\u884c\u8f93\u5165 ",(0,l.kt)("inlineCode",{parentName:"li"},'ssh-keygen -t ed25519 -C "your_email@example.com"')),(0,l.kt)("li",{parentName:"ol"},"\u786e\u5b9a\u76ee\u5f55\u6587\u4ef6\u540d\u3001\u786e\u5b9a\u5bc6\u7801\uff08\u53ef\u4ee5\u4e0d\u7528\u5bc6\u7801\uff0c\u4e0d\u7136\u6bcf\u6b21\u90fd\u8981\u8f93\u5165\uff09"),(0,l.kt)("li",{parentName:"ol"},"\u5728 gitlab\u3001gitHub \u4e0a\u8f93\u5165\u4f60\u751f\u6210\u7684\u516c\u94a5\uff08xxxx.pub\uff09"),(0,l.kt)("li",{parentName:"ol"},"\u9700\u8981\u7684\u8bdd\uff0c\u5728 ",(0,l.kt)("inlineCode",{parentName:"li"},"~/.ssh/cconfig")," \u4e2d\u914d\u7f6e\u670d\u52a1\u5668 host \u4ee5\u53ca \u5bc6\u94a5\u8def\u5f84 \uff08~/.shh/xxx\uff09"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u540c\u6b65 remote \u88ab\u5220\u9664\u4e86\u7684\u5206\u652f"),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"git remote prune origin")," \u6216\u8005 ",(0,l.kt)("inlineCode",{parentName:"p"},"git fetch --prune")),(0,l.kt)("p",{parentName:"li"},"\u533a\u522b\u53c2\u8003 ",(0,l.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/20106712/what-are-the-differences-between-git-remote-prune-git-prune-git-fetch-prune"},"What are the differences between git remote prune, git prune, git fetch --prune, etc")))),(0,l.kt)("h2",{id:"\u5e38\u7528\u64cd\u4f5c"},"\u5e38\u7528\u64cd\u4f5c"),(0,l.kt)("h3",{id:"\u8fdc\u7a0b\u4ed3\u5e93a"},"\u8fdc\u7a0b\u4ed3\u5e93a"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"git remote add origin git@server-name:path/repo-name.git")," \u5173\u8054\u8fdc\u7a0b\u4ed3\u5e93"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"git push -u origin master")," \u7b2c\u4e00\u6b21\u5173\u8054\u540e\u7684\u63a8\u9001"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"git push -u origin HEAD")," \u5173\u8054\u5206\u652f"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"git push origin <\u5206\u652f\u540d> --force")," commit \u64a4\u56de\u540e\uff0c\u63a8\u9001\u3002\u7528\u6765\u64a4\u56de\u7ebf\u4e0a\u7684 commit push"),(0,l.kt)("h3",{id:"\u67e5\u770b"},"\u67e5\u770b"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"git log"),"\u663e\u793a\u6700\u8fd1\u7684\u63d0\u4ea4\u5386\u53f2"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"git log --pretty=oneline"),"\u7b80\u5316\u5386\u53f2\u663e\u793a"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"git reflog"),"\u8bb0\u5f55\u4e86\u6bcf\u4e00\u6b21\u547d\u4ee4"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u5728\u547d\u4ee4\u884c\u8f93\u5165git reflog\uff0c\u4f1a\u51fa\u73b0\u4e22\u5931\u7684commit\u4fe1\u606f\u5217\n\u627e\u5230\u81ea\u5df1\u9700\u8981\u7684commit\u884c\uff0c git checkout -b recovery q1dw23d\ngit checkout master git merge recovery \u5207\u56de\u4e3b\u5206\u652f\n")),(0,l.kt)("h3",{id:"\u5206\u652f"},"\u5206\u652f"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"git checkout -b newBranch")," \u521b\u5efa\u5e76\u5207\u6362\u65b0\u5206\u652f "),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"git remote update origin -p")," \u66f4\u65b0\u672c\u5730\u663e\u793a\u7684\u8fdc\u7a0b\u5206\u652f"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"git push origin --delete branch")," \u5220\u9664\u7ebf\u4e0a\u5206\u652f"),(0,l.kt)("h3",{id:"\u5408\u5e76"},"\u5408\u5e76"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"git merge --no-ff theBranch")," \u5408\u5e76\u5206\u652f\uff0c\u5e76\u4e14\u4fdd\u7559\u539f\u5206\u652f\u7684\u63d0\u4ea4\u5386\u53f2"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"git rebase theBranch")," \u7ebf\u6027\u7684\u5408\u5e76\u5206\u652f\uff0ctheBranch\u53d8\u6210\u4e86\u5f53\u524d\u5206\u652f\u7684\u7236\u63d0\u4ea4\u8282\u70b9 "),(0,l.kt)("h3",{id:"\u5206\u79bbhead"},"\u5206\u79bb",(0,l.kt)("inlineCode",{parentName:"h3"},"HEAD")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("inlineCode",{parentName:"p"},"HEAD"),"\u662f\u4e00\u4e2a\u5bf9\u5f53\u524d\u68c0\u51fa\u8bb0\u5f55\u7684\u7b26\u53f7\u5f15\u7528"),(0,l.kt)("p",{parentName:"blockquote"},"\u5206\u79bb",(0,l.kt)("inlineCode",{parentName:"p"},"HEAD"),"\u5c31\u662f\u8ba9\u5176\u6307\u5411\u4e86\u67d0\u4e2a\u5177\u4f53\u7684\u63d0\u4ea4\u8bb0\u5f55\u800c\u4e0d\u662f\u5206\u652f\u540d")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"git checkout commit_id"),"\u4ece\u5206\u652f\u4e2d\u5206\u79bbHEAD\u5e76\u8ba9\u5b83\u6307\u5411\u4e00\u4e2a\u63d0\u4ea4\u8bb0\u5f55"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u76f8\u5bf9\u5f15\u7528"))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u5728\u4e00\u4e2a\u5206\u652f\u6216",(0,l.kt)("inlineCode",{parentName:"p"},"HEAD"),"\u5f00\u59cb\u8ba1\u7b97\uff0c"),(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("inlineCode",{parentName:"p"},"^"),"\u5411\u4e0a\u79fb\u52a81\u4e2a\u63d0\u4ea4\u8bb0\u5f55"),(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("inlineCode",{parentName:"p"},"~<num>"),"\u5411\u4e0a\u79fb\u52a8\u591a\u4e2a\u63d0\u4ea4\u8bb0\u5f55")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"git checkout branch^")," \u76f8\u5bf9\u5f15\u7528\u5230branch\u5206\u652f\u7684\u4e0a\u4e00\u4e2a\u63d0\u4ea4"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"git branch -f master HEAD~3")," \u5f3a\u5236\u5c06master\u5206\u652f\u7684\u63d0\u4ea4\u79fb\u52a8\u5230HEAD\u7684\u4e0a3\u4e2a\u63d0\u4ea4"),(0,l.kt)("h3",{id:"\u4fee\u6539-commit"},"\u4fee\u6539 commit"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"git commit --amend")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},'git commit --amend --author "name <email@email.com>"')," \u4fee\u6539\u4f5c\u8005"),(0,l.kt)("h3",{id:"\u64a4\u9500\u53d8\u66f4"},"\u64a4\u9500\u53d8\u66f4"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"git checkout -- file_name")," \u64a4\u56de\u66f4\u6539"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"git reset --hard 1094a")," "),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"git reset HEAD~2")),(0,l.kt)("p",null,"\u7248\u672c\u56de\u9000\u6307\u5b9acommit id\u7684\u5206\u652f\u3002\u6216\u8005HEAD\u7684\u4e0a\u51e0\u4e2a\u4f4d\u7f6e\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u4f46\u662freset\u540e\u524d\u9762\u7684\u53d8\u66f4\uff0c\u4f9d\u7136\u5904\u4e8e\u672a\u52a0\u5165\u6682\u7f13\u533a\u72b6\u6001")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"git revert HEAD"),"\u5411\u4e0b\u65b0\u589e\u52a0\u4e00\u4e2a\u63d0\u4ea4\uff0c\u63d0\u4ea4\u7684\u5185\u5bb9\u4e3a\u8981\u64a4\u56de\u7684\u63d0\u4ea4\u7684\u5185\u5bb9"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"git reset --soft HEAD^")," \u64a4\u56de commit \u4e14\u4fdd\u7559\u66f4\u6539\u5185\u5bb9"),(0,l.kt)("h3",{id:"\u53d8\u57fa"},"\u53d8\u57fa"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"git rebase -i asdas")," asdas \u63d0\u4ea4\u4e4b\u524d\u7684\u90fd\u5408\u5e76"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"pick 97fe73f feat: update\npick 62573b8 feat: add \n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'# Commands:\n# p, pick <commit> = use commit\n# r, reword <commit> = use commit, but edit the commit message\n# e, edit <commit> = use commit, but stop for amending\n# s, squash <commit> = use commit, but meld into previous commit\n# f, fixup <commit> = like "squash", but discard this commit\'s log message\n# x, exec <command> = run command (the rest of the line) using shell\n# d, drop <commit> = remove commit\n# l, label <label> = label current HEAD with a name\n# t, reset <label> = reset HEAD to a label\n# m, merge [-C <commit> | -c <commit>] <label> [# <oneline>]\n')),(0,l.kt)("p",null,"pick \u9009\u62e9\u8fd9\u4e2a commit \u4f5c\u4e3a\u6700\u65b0\u7684\u4ee3\u7801"),(0,l.kt)("p",null,"squash \u5c06\u8fd9\u4e2a commit \u538b\u7f29"),(0,l.kt)("p",null,"\u7136\u540e ",(0,l.kt)("inlineCode",{parentName:"p"},"git rebase --contine")),(0,l.kt)("h3",{id:"\u8d2e\u85cf"},"\u8d2e\u85cf"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"git stash")," \u5c06\u53d8\u66f4\u8d2e\u85cf"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"git stash list")," \u8d2e\u85cf\u5217\u8868"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"git stash apply")," \u5e94\u7528\u8d2e\u85cf"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"git stash drop stash${1}"),"  \u79fb\u9664 "),(0,l.kt)("h3",{id:"tag-\u64cd\u4f5c"},"tag \u64cd\u4f5c"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"git tag")," \u67e5\u770btag")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},'git tag -a v1.1 -m "version1.1"')," \u521b\u5efatag")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"git show v1.1")," \u67e5\u770btag \u4fe1\u606f")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"git push origin v1.1")," \u63a8\u9001tag"))))}c.isMDXComponent=!0}}]);