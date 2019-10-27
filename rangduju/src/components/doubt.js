import React from 'react';
import { Collapse } from 'antd';

const { Panel } = Collapse;

class Doubt extends React.Component {
    componentDidMount() {
        document.title = '常见疑惑-让渡居'
    }
    getList() {
        let list = [
            // 原第一页
            {
                title: '让渡居为我提供的服务是什么?',
                content: '<p>作为数字科技驱动的房屋管理机构，让渡居致力于利用技术优势提高房产的经济回报。如果您是房产的拥有者，并且有兴趣尝试短租，那么让渡居将作为您的最佳选择，不仅能招徕更优质的房客，您还可以时刻了解自己房产的最新状态，包括订单状态、空置水平、收益情况等。</p>'
            }, {
                title: '你们与Airbnb有什么区别?',
                content: '<p>短租平台做的事情是解决需求，而让渡居专注于提升供给方的运营水准，让民宿在平台上卖得更好，最终让民宿主人坐享更高收益。中国空置房屋适合做短租的有很多，我们的愿景不是做平台，而是找到中国房地产和酒店业两边交集的地方。</p><p>以Airbnb为代表的平台用户以年轻一族为主，无论是度假旅行还是商务差旅，他们倾向于便宜，便捷，个性化的用户体验，享受和家里一样的舒适设施。这同我们服务的目标群体高度重叠，因此简单来说，自带OTA属性的平台是我们的重要的销售渠道，而我们是它们的B端供给。</p>'
            }, {
                title: '让渡居是否属于中介?',
                content: '<p>广义上，让渡居同管理咨询公司、投资银行一样都属于中介服务业。但严格来讲，区别于传统房屋中介的租赁模式，让渡居是一家专业的房屋资产管理服务机构，致力于为您提高闲置房屋的资产回报率。让渡居的核心能力并非销售，我们不追求从更高频的交易中，而是借助技术优势，提供系统性的短租运营方案。</p>'
            }, {
                title: '使用让渡居的服务，我需要支付哪些运营成本?',
                content: '<p>固定成本和可变成本。固定成本为合作初期房屋设计改造配置的一次性投入；可变成本包含：让渡居运营管理费、运营固定服务费。目前我国短租托管公司采用的收费标准大部分高于或等于10%，让渡居通过技术赋能以提升成本管控能力，因此可以提供有竞争力的管理费率，其计费基数为房屋的月度订单总收入（扣除平台服务费后）。</p>'
            }, {
                title: '对房子会进行何种程度的装修，是否有专业的设计，是否会征求房主的意见?',
                content: '<p>房屋装修有一定免费额度，具体金额需要等到上门实地勘房后根据您房源目前的装修情况和周围竞品的平均水准而定，一个报销额的参考值是3000元每间卧室。我们有合作的专做租房空间改造的设计师，改造前考虑到您之后可能重新自住会与房东协商方案，超出报销额的部分需要由您垫付。</p>'
            },
            // 原第二页
            {
                title: '​前期房子如果需要置办电视、电视柜等物品设施，大概需要多少费用?',
                content: '<p>配置的目的是确保房子可以满足正常使用条件，但鉴于不同房屋有着不同的先天属性（地理位置、社区环境等），我们不会简单地一概而论，而是会结合前期数据分析和实地勘察，决定您需要添置或是更换哪些家电、家具。具体的装配方案会在我们完成实地勘察后1-2日后提供给您，待配置完毕后再次上门，进行核验、盘点和物业交割，核验结果确认书将会作为合同附表一同交您签字。 </p><p> 我们不建议前期投入过多，只要满足基本功能即可。同时，为进一步降低房屋所有者的支出，灵活提升住宿体验，我们将会推出家具、家电的融资租赁方案供房东自主选择。</p>'
            }, {
                title: '日常清洁用品的补给和更换是否应该包含在管理费里面吗?',
                content: '<p>个人洗护和清洁打扫用品等日常物品的采购和补给，不包含在管理费中，属于运营固定服务费。</p><p>管理费用于支付的是我们运营管理的专业服务，包括各OTA平台的优化管理、保洁服务的预约、水电费的缴纳，我们为了吸引更多房客，确保健康的空置率，均需要对行业有深入的理解、洞察，对市场波动的最快反应和保证房客入住体验的标准化服务。这些都需要程序开发工程师和运营人员的共同努力。</p><p>民宿市场中，日常清洁发生的采购均由房东承担，我们希望延续这一贯的传统。经我们测算和运营经验来看，每月的成本在50-70元，对您收益的影响有限。请记住，我们为了使您的房子增值是借助技术的手段和专业服务，而非投入更有价值的物品，这是我们企业经营的初衷和理念。</p>'
            }, {
                title: '如果运营收益不理想，是否有最低租金给我作为保障?',
                content: '<p>当然可以，我们尊重每一位有着不同风险偏好的人。让渡居的合作原则严格符合经济学原理，即超额收益上限和风险承担能力成正比，也就是您要求的保底租金越低，您对超过保底金额部分的分成比例就越高。因此，我们完全可以为您提供最低月租金的保障。</p>'
            }, {
                title: '作为民宿房主，需要向政府部门登记吗?',
                content: '<p>目前，中国没有关于屋主登记的一般规定，但有些地区会有地方的登记要求，如西安市和浙江省。具体请查看关于西安市或浙江省的常见问题，进一步了解有关在这两个地区出租房源的更多信息。让渡居会根据房屋所在区域，第一时间向您告知当地政府有关屋主登记的政策和流程。</p>'
            },
            // 原第三页
            {
                title: '房客的身份信息会被核实吗?',
                content: '<p>房客在平台端需要进行实名认证才可以下单，此外，Airbnb平台还对旅行者进行评级和审查，降低房东风险。除了平台的措施之外，让渡居即将采用需要身份证验证的智能门锁，最大程度避免黑天鹅事件的出现，不仅可以核实每一位房客身份，而且为房客档案的建立。</p>'
            }, {
                title: '如何保障我的房屋不会遭到损坏?',
                content: '<p>每次预订Airbnb都会进行风险评分，而且对于任何可疑的预订都会介入并取消。同时，我们在发布的房源描述中会添加房屋守则，明确对房客的要求，房客在预订前必须先同意遵守房屋使用守则。比如，我们会在守则中写明禁止吸烟和举办派对等活动。</p><p>此外，我们同保洁服务方合作，会在每一次换客保洁时上传图片等房屋检查信息，对于房客入住期间没有遵守要求的情况，我们将记录房客信用档案。</p>'
            }, {
                title: '如果房客损坏了我房源中的物品，我该怎么做?',
                content: '<p>保洁服务方在每次保洁时会核实物品情况，如果房客损坏了物品，我们会及时发起索赔。如果房客同意如数赔偿，我们将在5-7个工作日内发放您的收款。如果房客拒绝索赔申请，或者未能在72小时内回复，我们将邀请爱彼迎介入。大多数索赔会在一周之内得到解决。我们将会确保您和房客都得到公平陈述的机会。对于无法解决的，让渡居承担损失。</p> <p>根据Airbnb统计资料显示，2017年，全球旅行者用爱彼迎完成了4900万次旅程。每25000次住宿仅有1次重大财产损失索赔。所有的房东都受到Airbnb房东保障险的保障，您可以继续了解详情。</p>'
            },
        ]
        return list
    }
    render() {
        return (
            <div className="doubt distance">
                <div className="text-center">
                    <img src={require("../images/chahua2.png")} alt="常见疑惑"></img>
                </div>
                <div className='list-a'>
                    {
                        this.getList().map((item, index) => {
                            return (
                                <label key={index}>
                                    <Collapse bordered={false} defaultActiveKey={['0']}>
                                        <Panel header={item.title} key={index}>
                                            <div dangerouslySetInnerHTML={{ __html: item.content }}></div>
                                        </Panel>
                                    </Collapse>
                                </label>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}


export default Doubt;