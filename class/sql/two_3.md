## 传统的集合运算
*举个栗子：*

现有两个课程关系表Course1 和 Course2

<center>表 2-1 Course1</center>

CourseID | CourseName | Credit
:--:|:--:|:--:
101|计算机网络|4
102|数据库原理|3
103|网络开发|4

<center>表 2-2 Course2</center>

CourseID | CourseName | Credit
:--:|:--:|:--:
101|计算机网络|4
202|中国古代史|4
203|世界史|4
### 以下为其运算：
- **并** ==Course1 U Course2==
>并运算运算结果为：将两个表合并去重后所有元组组成的新表
<center>表 2-3 Course1 U Course2</center>

CourseID | CourseName | Credit
:--:|:--:|:--:
101|计算机网络|4
102|数据库原理|3
103|网络开发|4
202|中国古代史|4
203|世界史|4
- **差** ==Course1 - Course2==
>差运算运算结果为：属于前表，但不属于后表的所有元组组成的新表。
>简记：把前表中是后表元组的元组去掉所得的新表
<center>表 2-4 Course1 - Course2</center>

CourseID | CourseName | Credit
:--:|:--:|:--:
102|数据库原理|3
103|网络开发|4
- **交** ==Course1 ∩ Course2==
>交运算运算结果为：属于前表，也属于后表的所有元组组成的新表。
>简记：前表和后表中相同的元组组成的表
<center>表 2-5 Course1 ∩ Course2</center>

CourseID | CourseName | Credit
:--:|:--:|:--:
101|计算机网络|4
- **笛卡尔积** ==Course1 × Course2==
>简记：取前表中所有元组分别与后表中每一个元组组合成新的元组
<center>表 2-6 Course1 × Course2</center>

CourseID | CourseName | Credit | CourseID | CourseName | Credit
:--:|:--:|:--:|:--:|:--:|:--:
101|计算机网络|4|101|计算机网络|4
102|数据库原理|3|101|计算机网络|4
103|网络开发|4|101|计算机网络|4
101|计算机网络|4|202|中国古代史|4
102|数据库原理|3|202|中国古代史|4
103|网络开发|4|202|中国古代史|4
101|计算机网络|4|203|世界史|4
102|数据库原理|3|203|世界史|4
103|网络开发|4|203|世界史|4

## 专门的关系运算
老规矩，*举栗子：*

现有三个关系表：Author ， Press ， Publish 如下表所示
<center>表 2-7 Author</center>

AuthorID | Name | Sex
:--:|:--:|:--:
130|王高峰|男
131|赵立岩|男
132|刘丽娜|女
133|陈娟娟|女

<center>表 2-8 Press</center>

PressID | PressName
:--:|:--:
21|邮电出版社
22|机械出版社
23|教育出版社

<center>表 2-9 Publish</center>

AuthorID | PressID | Title
:--:|:--:|:--:
130|21|线性代数
130|23|行政管理学
131|21|旅游指南
132|22|美术简史
133|23|计算机组成

- **选择** ==σ~PressID=22~(Press)==
描述：在 Press 表选出标号为 22 的出版社
<center>表 2-10 标号为 22 的出版社信息</center>

PressID | PressName
:--:|:--:
22|机械出版社

- **投影** ==π~AuthorID,Name~(Author)==
描述：在 Author 表查询所有作者的编号和姓名
<center>表 2-11 所有作者的编号和姓名</center>

AuthorID | Name
:--:|:--:
130|王高峰
131|赵立岩
132|刘丽娜
133|陈娟娟
- **连接** ![在这里插入图片描述](https://img-blog.csdnimg.cn/20191012183817836.png =5000x100)
描述：查询赵立岩出版的图书信息
<center>表 2-12 赵立岩出版的图书信息</center>

AuthorID | PressID | Title
:--:|:--:|:--:
131|21|旅游指南