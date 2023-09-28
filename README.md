### fork @antfu/eslint-config


### eslint
- typescript
  - [x] @typescript-eslint/no-use-before-define off 禁止定义前的调用
  - [x] @typescript-eslint/no-unsafe-assignment 不允许将any类型赋值给变量
  - [x] @typescript-eslint/no-unsafe-member-access 禁止不安全的成员访问 例如访问 any 类型的成员
  - [x] @typescript-eslint/semi 分号
  - [x] @typescript-eslint/restrict-template-expressions 限制模板表达式的使用，例如对象的 toString 方法会返回 [object Object] 这是不符合预期的，这条规则不应该被禁用
  - [x] @typescript-eslint/member-delimiter-style 接口和类型别名的成员界定符，本配置中全部需要加分号结尾
  - [x] @typescript-eslint/comma-dangle 泛型特殊处理，任何情况下都需要尾随逗号 
  - [x] @typescript-eslint/no-floating-promises 是否允许出现未完全处理的 promise
  - [x] quote-props 仅在必要时，要求对象中的键引号  


### prettier
与 prettier 共用，存在以下冲突
  - [ ] operator-linebreak 因人而异的规则，我的习惯是换行之后将操作符置于行首，但是很遗憾，prettier 目前仍然不支持该配置
  相关的 [issues](https://github.com/prettier/prettier/issues/3806) 那么为了能够使用 prettier 需要修改掉 eslint 中的此配置



# eslint + prettier
  重设了所有的和 prettier 冲突的规则
