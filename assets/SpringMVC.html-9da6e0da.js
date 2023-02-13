const n=JSON.parse('{"key":"v-42081d4b","path":"/zh/backend/Spring/SpringMVC.html","title":"SpringMVC","lang":"zh-CN","frontmatter":{"title":"SpringMVC","icon":"bxl-spring-boot","category":["后端"],"tag":["Spring"],"description":"\\"\\" SpringMVC 1.创建maven项目 2.在pom.xml中写入springMVc依赖 &lt;?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?&gt; &lt;project xmlns=\\"http://maven.apache.org/POM/4.0.0\\" xmlns:xsi=\\"http://www.w3.org/2001/XMLSchema-instance\\" xsi:schemaLocation=\\"http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd\\"&gt; &lt;modelVersion&gt;4.0.0&lt;/modelVersion&gt; &lt;groupId&gt;com.atguigu&lt;/groupId&gt; &lt;artifactId&gt;springMVC-demo1&lt;/artifactId&gt; &lt;version&gt;1.0-SNAPSHOT&lt;/version&gt; &lt;packaging&gt;war&lt;/packaging&gt; &lt;dependencies&gt; &lt;!-- SpringMVC--&gt; &lt;dependency&gt; &lt;groupId&gt;org.springframework&lt;/groupId&gt; &lt;artifactId&gt;spring-webmvc&lt;/artifactId&gt; &lt;version&gt;5.3.9&lt;/version&gt; &lt;/dependency&gt; &lt;!-- 日志--&gt; &lt;dependency&gt; &lt;groupId&gt;ch.qos.logback&lt;/groupId&gt; &lt;artifactId&gt;logback-core&lt;/artifactId&gt; &lt;version&gt;1.2.5&lt;/version&gt; &lt;/dependency&gt; &lt;!-- ServletAPI--&gt; &lt;dependency&gt; &lt;groupId&gt;javax.servlet&lt;/groupId&gt; &lt;artifactId&gt;javax.servlet-api&lt;/artifactId&gt; &lt;version&gt;4.0.1&lt;/version&gt; &lt;scope&gt;provided&lt;/scope&gt; &lt;/dependency&gt; &lt;!-- Spring5和Thymeleaf整合包--&gt; &lt;dependency&gt; &lt;groupId&gt;org.thymeleaf&lt;/groupId&gt; &lt;artifactId&gt;thymeleaf-spring5&lt;/artifactId&gt; &lt;version&gt;3.0.12.RELEASE&lt;/version&gt; &lt;/dependency&gt; &lt;/dependencies&gt; &lt;properties&gt; &lt;maven.compiler.source&gt;8&lt;/maven.compiler.source&gt; &lt;maven.compiler.target&gt;8&lt;/maven.compiler.target&gt; &lt;/properties&gt; &lt;/project&gt;","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/zh/backend/Spring/SpringMVC.html"}],["meta",{"property":"og:site_name","content":"博客"}],["meta",{"property":"og:title","content":"SpringMVC"}],["meta",{"property":"og:description","content":"\\"\\" SpringMVC 1.创建maven项目 2.在pom.xml中写入springMVc依赖 &lt;?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?&gt; &lt;project xmlns=\\"http://maven.apache.org/POM/4.0.0\\" xmlns:xsi=\\"http://www.w3.org/2001/XMLSchema-instance\\" xsi:schemaLocation=\\"http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd\\"&gt; &lt;modelVersion&gt;4.0.0&lt;/modelVersion&gt; &lt;groupId&gt;com.atguigu&lt;/groupId&gt; &lt;artifactId&gt;springMVC-demo1&lt;/artifactId&gt; &lt;version&gt;1.0-SNAPSHOT&lt;/version&gt; &lt;packaging&gt;war&lt;/packaging&gt; &lt;dependencies&gt; &lt;!-- SpringMVC--&gt; &lt;dependency&gt; &lt;groupId&gt;org.springframework&lt;/groupId&gt; &lt;artifactId&gt;spring-webmvc&lt;/artifactId&gt; &lt;version&gt;5.3.9&lt;/version&gt; &lt;/dependency&gt; &lt;!-- 日志--&gt; &lt;dependency&gt; &lt;groupId&gt;ch.qos.logback&lt;/groupId&gt; &lt;artifactId&gt;logback-core&lt;/artifactId&gt; &lt;version&gt;1.2.5&lt;/version&gt; &lt;/dependency&gt; &lt;!-- ServletAPI--&gt; &lt;dependency&gt; &lt;groupId&gt;javax.servlet&lt;/groupId&gt; &lt;artifactId&gt;javax.servlet-api&lt;/artifactId&gt; &lt;version&gt;4.0.1&lt;/version&gt; &lt;scope&gt;provided&lt;/scope&gt; &lt;/dependency&gt; &lt;!-- Spring5和Thymeleaf整合包--&gt; &lt;dependency&gt; &lt;groupId&gt;org.thymeleaf&lt;/groupId&gt; &lt;artifactId&gt;thymeleaf-spring5&lt;/artifactId&gt; &lt;version&gt;3.0.12.RELEASE&lt;/version&gt; &lt;/dependency&gt; &lt;/dependencies&gt; &lt;properties&gt; &lt;maven.compiler.source&gt;8&lt;/maven.compiler.source&gt; &lt;maven.compiler.target&gt;8&lt;/maven.compiler.target&gt; &lt;/properties&gt; &lt;/project&gt;"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-02-12T06:26:17.000Z"}],["meta",{"property":"article:tag","content":"Spring"}],["meta",{"property":"article:modified_time","content":"2023-02-12T06:26:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"SpringMVC\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-02-12T06:26:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"1.创建maven项目","slug":"_1-创建maven项目","link":"#_1-创建maven项目","children":[]},{"level":2,"title":"2.在pom.xml中写入springMVc依赖","slug":"_2-在pom-xml中写入springmvc依赖","link":"#_2-在pom-xml中写入springmvc依赖","children":[]},{"level":2,"title":"3.在web.xml文件中配置前端控制器","slug":"_3-在web-xml文件中配置前端控制器","link":"#_3-在web-xml文件中配置前端控制器","children":[]},{"level":2,"title":"4.在resources文件下新建springMVC.xml的springMVC配置文件","slug":"_4-在resources文件下新建springmvc-xml的springmvc配置文件","link":"#_4-在resources文件下新建springmvc-xml的springmvc配置文件","children":[]},{"level":2,"title":"5.创建控制器类","slug":"_5-创建控制器类","link":"#_5-创建控制器类","children":[]},{"level":2,"title":"6.注解","slug":"_6-注解","link":"#_6-注解","children":[{"level":3,"title":"@RequestMapping注解","slug":"requestmapping注解","link":"#requestmapping注解","children":[]}]},{"level":2,"title":"7.SpringMVC支持ant风格的路径","slug":"_7-springmvc支持ant风格的路径","link":"#_7-springmvc支持ant风格的路径","children":[]},{"level":2,"title":"8.SpringMVC支持路径中的占位符","slug":"_8-springmvc支持路径中的占位符","link":"#_8-springmvc支持路径中的占位符","children":[]},{"level":2,"title":"9.SpringMVC获取请求参数","slug":"_9-springmvc获取请求参数","link":"#_9-springmvc获取请求参数","children":[{"level":3,"title":"1.通过ServletAPI获取","slug":"_1-通过servletapi获取","link":"#_1-通过servletapi获取","children":[]},{"level":3,"title":"2.通过控制器获取","slug":"_2-通过控制器获取","link":"#_2-通过控制器获取","children":[]}]}],"git":{"createdTime":1676128875000,"updatedTime":1676183177000,"contributors":[{"name":"EricKiku","email":"2966678301@qq.com","commits":3}]},"readingTime":{"minutes":6.2,"words":1859},"filePathRelative":"zh/backend/Spring/SpringMVC.md","localizedDate":"2023年2月11日","excerpt":"<h1> \\"\\"</h1>\\n<h1> SpringMVC</h1>\\n<h2> 1.创建maven项目</h2>\\n<h2> 2.在pom.xml中写入springMVc依赖</h2>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token operator\\">&lt;</span><span class=\\"token operator\\">?</span>xml version<span class=\\"token operator\\">=</span><span class=\\"token string\\">\\"1.0\\"</span> encoding<span class=\\"token operator\\">=</span><span class=\\"token string\\">\\"UTF-8\\"</span><span class=\\"token operator\\">?</span><span class=\\"token operator\\">&gt;</span>\\n<span class=\\"token operator\\">&lt;</span>project xmlns<span class=\\"token operator\\">=</span><span class=\\"token string\\">\\"http://maven.apache.org/POM/4.0.0\\"</span>\\n         xmlns<span class=\\"token operator\\">:</span>xsi<span class=\\"token operator\\">=</span><span class=\\"token string\\">\\"http://www.w3.org/2001/XMLSchema-instance\\"</span>\\n         xsi<span class=\\"token operator\\">:</span>schemaLocation<span class=\\"token operator\\">=</span><span class=\\"token string\\">\\"http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd\\"</span><span class=\\"token operator\\">&gt;</span>\\n    <span class=\\"token generics\\"><span class=\\"token punctuation\\">&lt;</span>modelVersion<span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token number\\">4.0</span><span class=\\"token number\\">.0</span><span class=\\"token operator\\">&lt;</span><span class=\\"token operator\\">/</span>modelVersion<span class=\\"token operator\\">&gt;</span>\\n\\n    <span class=\\"token generics\\"><span class=\\"token punctuation\\">&lt;</span>groupId<span class=\\"token punctuation\\">&gt;</span></span>com<span class=\\"token punctuation\\">.</span>atguigu<span class=\\"token operator\\">&lt;</span><span class=\\"token operator\\">/</span>groupId<span class=\\"token operator\\">&gt;</span>\\n    <span class=\\"token generics\\"><span class=\\"token punctuation\\">&lt;</span>artifactId<span class=\\"token punctuation\\">&gt;</span></span>springMVC<span class=\\"token operator\\">-</span>demo1<span class=\\"token operator\\">&lt;</span><span class=\\"token operator\\">/</span>artifactId<span class=\\"token operator\\">&gt;</span>\\n    <span class=\\"token generics\\"><span class=\\"token punctuation\\">&lt;</span>version<span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token number\\">1.0</span><span class=\\"token operator\\">-</span><span class=\\"token constant\\">SNAPSHOT</span><span class=\\"token operator\\">&lt;</span><span class=\\"token operator\\">/</span>version<span class=\\"token operator\\">&gt;</span>\\n    \\n    <span class=\\"token generics\\"><span class=\\"token punctuation\\">&lt;</span>packaging<span class=\\"token punctuation\\">&gt;</span></span>war<span class=\\"token operator\\">&lt;</span><span class=\\"token operator\\">/</span>packaging<span class=\\"token operator\\">&gt;</span>\\n\\n\\n    <span class=\\"token generics\\"><span class=\\"token punctuation\\">&lt;</span>dependencies<span class=\\"token punctuation\\">&gt;</span></span>\\n<span class=\\"token operator\\">&lt;</span><span class=\\"token operator\\">!</span><span class=\\"token operator\\">--</span>        <span class=\\"token class-name\\">SpringMVC</span><span class=\\"token operator\\">--</span><span class=\\"token operator\\">&gt;</span>\\n        <span class=\\"token generics\\"><span class=\\"token punctuation\\">&lt;</span>dependency<span class=\\"token punctuation\\">&gt;</span></span>\\n            <span class=\\"token generics\\"><span class=\\"token punctuation\\">&lt;</span>groupId<span class=\\"token punctuation\\">&gt;</span></span>org<span class=\\"token punctuation\\">.</span>springframework<span class=\\"token operator\\">&lt;</span><span class=\\"token operator\\">/</span>groupId<span class=\\"token operator\\">&gt;</span>\\n            <span class=\\"token generics\\"><span class=\\"token punctuation\\">&lt;</span>artifactId<span class=\\"token punctuation\\">&gt;</span></span>spring<span class=\\"token operator\\">-</span>webmvc<span class=\\"token operator\\">&lt;</span><span class=\\"token operator\\">/</span>artifactId<span class=\\"token operator\\">&gt;</span>\\n            <span class=\\"token generics\\"><span class=\\"token punctuation\\">&lt;</span>version<span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token number\\">5.3</span><span class=\\"token number\\">.9</span><span class=\\"token operator\\">&lt;</span><span class=\\"token operator\\">/</span>version<span class=\\"token operator\\">&gt;</span>\\n        <span class=\\"token operator\\">&lt;</span><span class=\\"token operator\\">/</span>dependency<span class=\\"token operator\\">&gt;</span>\\n\\n<span class=\\"token operator\\">&lt;</span><span class=\\"token operator\\">!</span><span class=\\"token operator\\">--</span>        日志<span class=\\"token operator\\">--</span><span class=\\"token operator\\">&gt;</span>\\n        <span class=\\"token generics\\"><span class=\\"token punctuation\\">&lt;</span>dependency<span class=\\"token punctuation\\">&gt;</span></span>\\n            <span class=\\"token generics\\"><span class=\\"token punctuation\\">&lt;</span>groupId<span class=\\"token punctuation\\">&gt;</span></span>ch<span class=\\"token punctuation\\">.</span>qos<span class=\\"token punctuation\\">.</span>logback<span class=\\"token operator\\">&lt;</span><span class=\\"token operator\\">/</span>groupId<span class=\\"token operator\\">&gt;</span>\\n            <span class=\\"token generics\\"><span class=\\"token punctuation\\">&lt;</span>artifactId<span class=\\"token punctuation\\">&gt;</span></span>logback<span class=\\"token operator\\">-</span>core<span class=\\"token operator\\">&lt;</span><span class=\\"token operator\\">/</span>artifactId<span class=\\"token operator\\">&gt;</span>\\n            <span class=\\"token generics\\"><span class=\\"token punctuation\\">&lt;</span>version<span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token number\\">1.2</span><span class=\\"token number\\">.5</span><span class=\\"token operator\\">&lt;</span><span class=\\"token operator\\">/</span>version<span class=\\"token operator\\">&gt;</span>\\n        <span class=\\"token operator\\">&lt;</span><span class=\\"token operator\\">/</span>dependency<span class=\\"token operator\\">&gt;</span>\\n<span class=\\"token operator\\">&lt;</span><span class=\\"token operator\\">!</span><span class=\\"token operator\\">--</span>        <span class=\\"token class-name\\">ServletAPI</span><span class=\\"token operator\\">--</span><span class=\\"token operator\\">&gt;</span>\\n        <span class=\\"token generics\\"><span class=\\"token punctuation\\">&lt;</span>dependency<span class=\\"token punctuation\\">&gt;</span></span>\\n            <span class=\\"token generics\\"><span class=\\"token punctuation\\">&lt;</span>groupId<span class=\\"token punctuation\\">&gt;</span></span>javax<span class=\\"token punctuation\\">.</span>servlet<span class=\\"token operator\\">&lt;</span><span class=\\"token operator\\">/</span>groupId<span class=\\"token operator\\">&gt;</span>\\n            <span class=\\"token generics\\"><span class=\\"token punctuation\\">&lt;</span>artifactId<span class=\\"token punctuation\\">&gt;</span></span>javax<span class=\\"token punctuation\\">.</span>servlet<span class=\\"token operator\\">-</span>api<span class=\\"token operator\\">&lt;</span><span class=\\"token operator\\">/</span>artifactId<span class=\\"token operator\\">&gt;</span>\\n            <span class=\\"token generics\\"><span class=\\"token punctuation\\">&lt;</span>version<span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token number\\">4.0</span><span class=\\"token number\\">.1</span><span class=\\"token operator\\">&lt;</span><span class=\\"token operator\\">/</span>version<span class=\\"token operator\\">&gt;</span>\\n            <span class=\\"token generics\\"><span class=\\"token punctuation\\">&lt;</span>scope<span class=\\"token punctuation\\">&gt;</span></span>provided<span class=\\"token operator\\">&lt;</span><span class=\\"token operator\\">/</span>scope<span class=\\"token operator\\">&gt;</span>\\n        <span class=\\"token operator\\">&lt;</span><span class=\\"token operator\\">/</span>dependency<span class=\\"token operator\\">&gt;</span>\\n<span class=\\"token operator\\">&lt;</span><span class=\\"token operator\\">!</span><span class=\\"token operator\\">--</span>        <span class=\\"token class-name\\">Spring5</span>和<span class=\\"token class-name\\">Thymeleaf</span>整合包<span class=\\"token operator\\">--</span><span class=\\"token operator\\">&gt;</span>\\n        <span class=\\"token generics\\"><span class=\\"token punctuation\\">&lt;</span>dependency<span class=\\"token punctuation\\">&gt;</span></span>\\n            <span class=\\"token generics\\"><span class=\\"token punctuation\\">&lt;</span>groupId<span class=\\"token punctuation\\">&gt;</span></span>org<span class=\\"token punctuation\\">.</span>thymeleaf<span class=\\"token operator\\">&lt;</span><span class=\\"token operator\\">/</span>groupId<span class=\\"token operator\\">&gt;</span>\\n            <span class=\\"token generics\\"><span class=\\"token punctuation\\">&lt;</span>artifactId<span class=\\"token punctuation\\">&gt;</span></span>thymeleaf<span class=\\"token operator\\">-</span>spring5<span class=\\"token operator\\">&lt;</span><span class=\\"token operator\\">/</span>artifactId<span class=\\"token operator\\">&gt;</span>\\n            <span class=\\"token generics\\"><span class=\\"token punctuation\\">&lt;</span>version<span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token number\\">3.0</span><span class=\\"token number\\">.12</span><span class=\\"token punctuation\\">.</span><span class=\\"token constant\\">RELEASE</span><span class=\\"token operator\\">&lt;</span><span class=\\"token operator\\">/</span>version<span class=\\"token operator\\">&gt;</span>\\n        <span class=\\"token operator\\">&lt;</span><span class=\\"token operator\\">/</span>dependency<span class=\\"token operator\\">&gt;</span>\\n    <span class=\\"token operator\\">&lt;</span><span class=\\"token operator\\">/</span>dependencies<span class=\\"token operator\\">&gt;</span>\\n\\n\\n\\n    <span class=\\"token generics\\"><span class=\\"token punctuation\\">&lt;</span>properties<span class=\\"token punctuation\\">&gt;</span></span>\\n        <span class=\\"token generics\\"><span class=\\"token punctuation\\">&lt;</span>maven<span class=\\"token punctuation\\">.</span>compiler<span class=\\"token punctuation\\">.</span>source<span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token number\\">8</span><span class=\\"token operator\\">&lt;</span><span class=\\"token operator\\">/</span>maven<span class=\\"token punctuation\\">.</span>compiler<span class=\\"token punctuation\\">.</span>source<span class=\\"token operator\\">&gt;</span>\\n        <span class=\\"token generics\\"><span class=\\"token punctuation\\">&lt;</span>maven<span class=\\"token punctuation\\">.</span>compiler<span class=\\"token punctuation\\">.</span>target<span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token number\\">8</span><span class=\\"token operator\\">&lt;</span><span class=\\"token operator\\">/</span>maven<span class=\\"token punctuation\\">.</span>compiler<span class=\\"token punctuation\\">.</span>target<span class=\\"token operator\\">&gt;</span>\\n    <span class=\\"token operator\\">&lt;</span><span class=\\"token operator\\">/</span>properties<span class=\\"token operator\\">&gt;</span>\\n\\n<span class=\\"token operator\\">&lt;</span><span class=\\"token operator\\">/</span>project<span class=\\"token operator\\">&gt;</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};
