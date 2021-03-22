import React, { Component } from 'react'

export default class Home extends Component {
    constructor() {
        super()
        this.state = {
            carList: [
                {
                    id: 1,
                    name: '奥迪',
                    time: new Date()
                },
                {
                    id: 2,
                    name: '宝马',
                    time: new Date()
                },
                {
                    id: 3,
                    name: '捷达',
                    time: new Date()
                }
            ],
            current: {}
        }

    }
    // 搜索框事件
    search(e) {
        // 点击回车键触发事件
        if (e.keyCode === 13) {
            // console.log(e.target.value);
            if (e.target.value === '') {
                alert('输入不能为空');
            }

            // 判断是编辑还是添加
            if (this.state.current.id) {
                // 编辑
                this.update(this.state.current.id,e.target.value);
            } else {
                // 把输入框内容添加到列表
                this.add(e.target.value);
            }
            // 清空输入框
            e.target.value = '';

        }
    }
    // 添加
    add(name) {
        const { carList } = this.state;
        let id = carList.length === 0 ? 1 : carList[carList.length - 1].id + 1;
        let time = new Date();
        let newObj = {
            id,
            name,
            time
        }
        // console.log(newObj);
        // 
        carList.push(newObj);
        // 重新渲染
        this.setState({ carList });
    }
    // 编辑
    edit(ele) {
        // 把品牌名显示在输入框
        document.querySelector('input').value = ele.name;
        // 把内容存放在current
        this.setState({ current: ele });
    }
    // 删除
    del(idx) {
        const {carList} = this.state;
        // 根据索引删除一条
        this.state.carList.splice(idx,1);
        // 
        this.setState({carList})
    }
    // 更新
    update(id,name){
        let {carList} = this.state;
        // 声明一个新数组存放更新后的数据
        let newList = carList.map(ele=>{
            if(ele.id === id){
                return{//其他不变，只改变name
                    ...ele,
                    name
                }
            }else{
                return ele;
            }
        })

        // 重新渲染
        this.setState({carList:newList});
        // 清空current
        this.setState({current:{}})

    }

    render() {
        // 解构赋值
        const { carList } = this.state;
        return (
            <div>
                <h1>汽车品牌管理</h1>
                <hr />
                {/* 给搜索框添加键盘事件 */}
                <input type="search" name="" placeholder='请输入品牌名称' className="form-control" onKeyDown={(e) => this.search(e)} />
                <hr />
                <table className='table table-hover'>
                    <thead>
                        <tr>
                            <th>编号</th>
                            <th>品牌</th>
                            <th>创建时间</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        {carList.length > 0 ? carList.map((ele, idx) => (
                            <tr key={ele.id}>
                                <td>{ele.id}</td>
                                <td>{ele.name}</td>
                                <td>{ele.time.toDateString()}</td>
                                <td>
                                    <button onClick={() => this.edit(ele)}>编辑</button>
                                    <button onClick={() => this.del(idx)}>删除</button>
                                </td>
                            </tr>
                        )) : <tr>
                            <td colSpan='4'>暂无数据</td>
                            </tr>}
                    </tbody>
                </table>
            </div>
        )
    }
}
