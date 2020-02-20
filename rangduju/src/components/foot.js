import React from 'react'
import moment from 'moment'

class Foot extends React.Component {
    render() {
        return (
            <div>
                <div className="foot">
                    <div>
                        <label className="label_frist">联系我们</label>
                        <label className="contact-info">北京市朝阳区建国路88号</label>
                        <label className="contact-info">SOHO现代城B座，100025</label>
                        <label className="contact-info">办公电话：010-85890977</label>
                        <label className="contact-info">周一到周五 9:00-19:00</label>
                        <label className="contact-info">电子邮箱：pr@rangduju.com</label>
                    </div>
                    <div className="nudge">
                        <label className="label_frist">加入我们</label>
                        <label>
                            <a href="https://www.lagou.com/gongsi/580231.html" rel="noopener noreferrer" target="_blank">
                                拉勾
                        </a>
                        </label>
                        <label>
                            <a href="https://www.ciweishixi.com/company/detail-28377.html" rel="noopener noreferrer" target="_blank">
                                刺猬实习
                        </a>
                        </label>
                         <label>
                             <a href="https://www.shixiseng.com/com/com_rzjx29rycxgg" rel="noopener noreferrer" target="_blank">
                                实习僧
                        </a>
                        </label>
                    </div>
                    <div className="nudge">
                        <label className="label_frist">友情链接</label>
                        <label>
                            <a href="https://nuan.io/hello-wechat" rel="noopener noreferrer" target="_blank">
                                暖房
                             </a>
                        </label>
                        <label>
                            <a href="http://www.nnflow.com" rel="noopener noreferrer" target="_blank">
                                冉SPA
                            </a>
                        </label>
                        <label>
                            <a href="https://www.myhostex.com" rel="noopener noreferrer" target="_blank">
                                百居易
                            </a>
                        </label>
                        <label>
                            <a href="http://www.hoolihome.com" rel="noopener noreferrer" target="_blank">
                                Hooli
                            </a>
                        </label>
                        <label>
                            <a href="https://hplustech.com" rel="noopener noreferrer" target="_blank">
                                H+
                            </a>
                        </label>
                    </div>
                    <div className="nudge">
                        <label className="label_frist">条款</label>
                        <label>
                            <a href="https://mp.weixin.qq.com/s/YoqpzK5aiqZF8lNLZVchEg" rel="noopener noreferrer" target="_blank">
                                服务条款
                        </a>
                        </label>
                        <label>
                            <a href="https://mp.weixin.qq.com/s/A0yEHZeXwKPzIl8R5PC0sw" rel="noopener noreferrer" target="_blank">
                                隐私保护
                        </a>
                        </label>
                        <label>
                            <a href="/sitemap.xml" rel="noopener noreferrer" target="_blank">
                                网站地图
                            </a>
                        </label>
                    </div>
                    <div className="text-center">
                        <label className="label_frist">媒体平台</label>
                        <div className="qrcode-group">
                            <div>
                                <img src={require("../images/foot-qrcode-wxgzh.jpg")} className="qrcode" alt="公众号"></img>
                                <div className="text1">微信公众号</div>
                            </div>
                            <div>
                                <img src={require("../images/foot-qrcode-wxxcx.jpg")} className="qrcode" alt="小程序"></img>
                                <div className="text1">微信小程序</div>
                            </div>
                        </div>
                        <div className="meiti">
                            <div className="zu1">
                                <a href="https://weibo.com/u/7239677758?is_hot=1" rel="noopener noreferrer" target="_blank"><img src={require("../images/wb1.png")} ait="微博"></img></a>
                                <a href="https://www.zhihu.com/org/rang-du-ju/activities" rel="noopener noreferrer" target="_blank"><img src={require("../images/zh1.png")} ait="知乎"></img></a>
                                <a href="https://www.linkedin.com/company/rangduju" rel="noopener noreferrer" target="_blank"><img src={require("../images/ly1.png")} ait="领英"></img></a>
                                <a href="https://github.com/rangduju" rel="noopener noreferrer" target="_blank"><img src={require("../images/git.png")} ait="GitHub"></img></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='foot_bottom'>
                    <p style={{ clear: 'both' }}>©{moment().format("YYYY")} 让渡居科技（上海）有限公司</p>
                    <p><a href="http://beian.miit.gov.cn" rel="noopener noreferrer" target="_blank">
                        沪ICP备19031849号</a></p>
                    <p><a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010502038927" ><img style={{marginRight:"5px"}} src={require("../images/beian.png")} />京公网安备 11010502038927号</a></p>
                </div>
                {/* <div>公网安备 11010502038927号</div> */}
                {/* <a target="_blank" rel="noopener noreferrer" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010502038927" >京公网安备 11010502038927号</a>&nbsp;&nbsp;&nbsp;&nbsp; */}

            </div>
        );
    }
}

export default Foot;
