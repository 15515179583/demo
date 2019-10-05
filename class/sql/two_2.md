### 4. 关系数据库
关系数据库采用关系模型作为数据组织方式的数据库。关系数据库是应用数学的方法来处理数据库中的数据
#### 4.1 关系模型的组成
关系模型由关系数据结构，关系操作集合和关系完整性约束三部分组成
- 关系操作：
![在这里插入图片描述](https://img-blog.csdnimg.cn/20191003141110489.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxMjIzMDU1MDY3Mg==,size_16,color_FFFFFF,t_70)
#### 4.2关系的数学定义
在关系模型中，数据在用户观点下是一个逻辑结构为二维表的数据模型。而关系模型是建立在关系代数的基础上的
**定义1：** 域是一组具有相同数据类型的值的集合

**定义2：** 设D~1~ ，D~2~  ，•••，D~n~ 为任意域，定义D~1~ ，D~2~  ，•••，D~n~ 的笛卡尔积为：<center>
D~1~ × D~2~  × ••• × D~n~ = {(d~1~ ,d~2~ ,•••,d~n~ )|d~i~∈D~i~ ,i=1,2,3,...,n}</center>.
*举个栗子：*
![在这里插入图片描述](https://img-blog.csdnimg.cn/20191003141431282.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxMjIzMDU1MDY3Mg==,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/2019100314152892.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxMjIzMDU1MDY3Mg==,size_16,color_FFFFFF,t_70)
笛卡尔积可以表示为一个二维表，表中的每一行对应一个元组，表中的每一列对应一个域

**定义3：**
![在这里插入图片描述](https://img-blog.csdnimg.cn/20191003142028420.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxMjIzMDU1MDY3Mg==,size_16,color_FFFFFF,t_70)
>关系可以有三种基本类型：基本表、查询表和视图表。
- 基本表就是实际存在的表，即物理表，是数据存储的逻辑表示。
- 查询表是查询结果对应的表，是由基本表的笛卡尔积导出的。
- 视图表是由基本表或其他视图表导出的表，是虚表，不存储数据。

关系具有以下性质：
![在这里插入图片描述](https://img-blog.csdnimg.cn/20191003145307239.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxMjIzMDU1MDY3Mg==,size_16,color_FFFFFF,t_70)
>关系的描述称为关系模式。它包括关系名、组成该关系的各属性名、属性来自的域、属性向域的映像、属性间数据的依赖关系等。因此一个关系模式应当是一个5元组。

**定义4：**
![在这里插入图片描述](https://img-blog.csdnimg.cn/20191003142914764.png)
#### 4.2 关系代数
关系代数是一种抽象的查询语言，是关系数据操作语言的一种传统表达方式，它是用对关系的运算来表达查询的。
##### 4.2.1 关系代数运算符
![在这里插入图片描述](https://img-blog.csdnimg.cn/20191003143207954.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxMjIzMDU1MDY3Mg==,size_16,color_FFFFFF,t_70)
#### 4.3 关系查询优化
![在这里插入图片描述](https://img-blog.csdnimg.cn/20191003143605712.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxMjIzMDU1MDY3Mg==,size_16,color_FFFFFF,t_70)
