import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image
} from 'react-native';
import ZZRNGuizeStyle from './ZZRNGuizeStyle';
import * as Native from '../../libs/native/index';

class ZZRNGuize extends Component {
  _onPress = () => {
    const url = 'https://m.zhuanzhuan.58.com/Mzhuanzhuan/Mxieyi/privacy.html';
    console.log('url', url);
    const moduleName = 'ZZRNPrivacy';
    const params = {
      url,
      moduleName
    };
    Native.openRN(params);
  }
  _goBack = () => {
    Native.closeRN();
  }
  componentDidMount(){
    Native.leStatic("GUIZE_SHOW");
  }
  render() {
    return (
      <View style={StyleSheet.absoluteFill}>
        <View style={ZZRNGuizeStyle.statusBar}>
          <TouchableOpacity
            onPress={() => this._goBack()}
            style={ZZRNGuizeStyle.arrowWrapper}
          >
            <Image
              style={ZZRNGuizeStyle.arrowIcon}
              source={{uri: 'https://img.58cdn.com.cn/zhuanzhuan/bundle/img/arrow.png'}}
            />
          </TouchableOpacity>
          <Text style={ZZRNGuizeStyle.upTitle}>转转用户服务协议</Text>
        </View>
        <ScrollView style={ZZRNGuizeStyle.container}>
          <Text style={ZZRNGuizeStyle.plain}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在接受本协议之前，请您认真阅读、充分理解本协议的全部内容（特别是以粗体标注的内容）。如你对本协议的条款有疑问的，请通过转转客服渠道进行咨询，转转将向您解释条款内容。如您不同意接受本协议的任意内容，或者无法准确理解相关条款含义的，您应立即停止登录、使用或其他后续操作程序
            <Text style={ZZRNGuizeStyle.emphsis}>，并销毁所有许可软件副本</Text>。
          </Text>
          <Text style={ZZRNGuizeStyle.headerh1}>
            转转用户服务协议
          </Text>
          <View>
            <Text style={ZZRNGuizeStyle.headerh2}>第一条 立约目的和签约主体</Text>
            <Text style={ZZRNGuizeStyle.plain}>1、您通过转转平台页面点击确认或以其他方式选择接受本协议并按照转转登录程序成功登录，即表示您与转转已达成协议并同意接受本协议的全部约定内容。本协议自您点击确认之时起生效，在您使用转转服务期间持续有效。</Text>
            <Text style={ZZRNGuizeStyle.plain}>2、本协议由用户（以下亦简称“您”）与转转软件所有者及运营者北京转转精神科技有限责任公司（以下简称“本公司”或“转转”）共同签署。</Text>
          </View>
          <View>
            <Text style={ZZRNGuizeStyle.headerh2}>第二条 协议生效和适用范围</Text>
            <Text style={ZZRNGuizeStyle.plain}>1、为规范转转平台运营秩序，明确各方权利义务关系，保障各方合法权益，特制定本协议。</Text>
            <Text style={ZZRNGuizeStyle.emphsis}>2、本协议内容包括协议正文、《转转隐私权条款》以及所有转转已经发布的或将来可能发布并采取合理途径提前七日通知您的各类规则、操作流程、行为规范等。转转有权以修改、更新等方式调整本协议和相关规则的内容，相关内容将公布于网站上或以其他方式通知您。除非您明示并通知转转不愿接受调整后的内容并停止使用转转及相关服务，否则调整后的内容将于公布之日起七日后开始对您生效。</Text>
          </View>
          <View>
            <Text style={ZZRNGuizeStyle.headerh2}>第三条 定义</Text>
            <Text style={ZZRNGuizeStyle.plain}>1、“转转”：指北京转转精神科技有限责任公司旗下的个人闲置（二手）物品交易平台。</Text>
            <Text style={ZZRNGuizeStyle.plain}>
              2、“转转用户”：指享受转转服务的用户，应当具备中华人民共和国法律规定的与您行为相适应的完全民事权利能力和民事行为能力。
              <Text style={ZZRNGuizeStyle.emphsis}>如用户不满18周岁，则用户承诺其注册登录转转已获得法定监护人的同意或由其法定监护人代为注册，如用户无法独立承担本协议法律责任的，其相应的法律责任由其法定监护人承担。</Text>
            </Text>
            <Text style={ZZRNGuizeStyle.plain}>3、“用户注册”：是指用户进入转转，通过微信账号授权登陆并必须绑定手机号，按转转要求填写相关信息并确认同意履行相关用户协议的过程。</Text>
            <Text style={ZZRNGuizeStyle.plain}>4、“担保交易”：用户知悉并同意，当用户因交易发生在线支付时，本平台接受卖方委托通过转转微信支付账户代为收取交易款项，并在买方在线确认“已收货”或本平台约定的交易期限届满时接受买方委托将该交易款项支付至卖方微信账户，或卖方确认该笔交易已取消时接受卖方委托将该交易款项退回至买方微信账户。在线交易双方就交易事项无法达成一致意见期间，交易双方一致同意由转转将该笔交易款项暂时冻结在转转微信支付账户直至双方达成一致意见并根据双方的共同意愿支付。交易双方用户同意, 转转微信账户代付后, 非经法律程序或者本协议之约定, 该支付是不可撤销的，转转的支付行为视为经买卖双方的共同授权代为支付的行为。</Text>
          </View>
          <View>
            <Text style={ZZRNGuizeStyle.headerh2}>第四条  转转客户端授权范围</Text>
            <Text style={ZZRNGuizeStyle.plain}>1、转转基于本协议许可而非向您销售转转客户端（以下简称“许可软件”），用户仅可依照本协议约定使用许可软件。转转保留未明示授予的一切权利。转转有权根据实际情况对许可软件及其相关功能进行变更、升级、修改或转移，并有权在许可软件系统中开发新的功能或其他服务，并不另行通知于您。除非附有独立的协议，否则上述所有新的功能、软件服务的提供仍适用本协议。</Text>
            <Text style={ZZRNGuizeStyle.plain}>2、除您与转转另有约定外，您同意转转客户端的服务及相关的数据仅供您个人非商业性质的使用，或者将转转作为从事商业活动的场所、平台或其他任何形式的媒介。您不得对许可软件服务的任何部分或对其使用及获得进行复制、拷贝、出售或利用许可软件服务进行调查、广告或将许可软件服务用于其他任何商业目的，也不得对许可软件或者许可软件运行过程中释放在任何终端中的数据及许可软件运行过程中终端与服务器端的交互数据进行复制、更改、修改、挂接运行或创作任何衍生作品，形式包括但不限于使用插件、外挂或非经授权的第三方工具/服务接入许可软件和相关系统。但转转对特定服务另有使用指引或规则的除外。</Text>
            <Text style={ZZRNGuizeStyle.plain}>3、用户不得开发或委托第三方开发/使用应用软件或程序侵入转转平台系统进行批量信息的抓取、下载或进行违背甲方平台产品规则的操作，否则甲方有权全额扣除乙方缴纳的保证金（如有）或者直接抵扣用户在转转平台的交易款项并要求乙方对给甲方造成的全部损失承担赔偿责任。</Text>
            <Text style={ZZRNGuizeStyle.plain}>4、用户不得对许可软件的相关信息擅自出租、出借、复制、修改、链接、转载、汇编、发表、出版、建立镜像站点，借助许可软件发展与之有关的衍生产品、作品、服务、插件、外挂、兼容、互联等；不得删除许可软件及其他副本上关于版权的信息、内容；不得进行任何危害信息网络安全的行为，包括使用许可软件时以任何方式损坏或破坏许可软件或使其不能运行或超负荷或干扰第三方对许可软件的使用；不得进行未经允许进入他人软件系统并删除、修改、增加存储信息；不得故意传播恶意程序或病毒以及其他破坏、干扰正常网络信息服务的行为；不得利用许可软件发表、传送、传播、储存侵害他人知识产权、商业秘密权等合法权利的内容，或从事欺诈、盗用他人账户、资金等违法犯罪活动。</Text>
            <Text style={ZZRNGuizeStyle.plain}>5、转转为转转平台向您提供的服务付出了大量的成本，除转转平台明示的收费业务外，转转向您提供的服务目前是免费的。如未来转转向您收取合理费用，转转会采取合理途径并以足够合理的期限提前通过法定程序并以本协议约定的方式通知您，确保您有充分选择的权利。</Text>
          </View>
          <View>
            <Text style={ZZRNGuizeStyle.headerh2}>第五条 用户权利和义务</Text>
            <Text style={ZZRNGuizeStyle.plain}>
              1、您在使用转转平台服务时，您需要凭您的微信账户授权登录许可软件并绑定合法有效的手机号码。转转仅根据您的微信账户和绑定的手机号码确认使用许可软件者的身份。您应妥善保管您的微信账户、手机号码和验证码，并对其使用或遗失自行承担责任。
              <Text style={ZZRNGuizeStyle.emphsis}>转转账户因您主动泄露或因您遭受他人攻击、诈骗等行为导致的损失及后果，转转并不承担责任，您应通过司法、行政等救济途径向侵权行为人追偿。</Text>
            </Text>
            <Text style={ZZRNGuizeStyle.plain}>
              2、如果您的微信账户和手机号码存在未获授权的使用，或者发生其他任何安全问题时，建议您立即通知转转。除法律另有明确规定外，转转对因上述情形产生的后果不承担责任。
              <Text style={ZZRNGuizeStyle.emphsis}>您理解转转对您的任何请求采取行动均需要合理时间，且转转应您请求而采取的行动可能无法避免或阻止侵害后果的形成或扩大，除转转存在法定过错外，转转不承担责任。</Text>
            </Text>
            <Text style={ZZRNGuizeStyle.plain}>
              3、您在使用转转服务时须向转转提供准确的个人资料信息，您保证您填写及提交的前述资料信息真实、准确、合法、有效，如有任何变更须及时更新。转转有权对您在注册登录环节填写或提交的资料信息进行备案，且保留抽查、要求您补充提交、及时更新的权利。
              <Text style={ZZRNGuizeStyle.emphsis}>如转转按您最后一次提供的信息与您联系未果、您未按转转的要求及时提供/更新信息、您提供的信息存在明显不实或行政司法机关核实您提供的信息无效的，您将承担因此对您自身、他人及转转造成的全部损失与不利后果。转转可向您发出询问或要求整改的通知，并要求您进行重新认证，直至中止、终止对您提供部分或全部转转平台服务，转转对此不承担责任。</Text>
            </Text>
            <Text style={ZZRNGuizeStyle.plain}>4、用户保证不以他人资料在转转进行注册（包括但不限于使用他人的微信账户或者手机号码）、登录, 否则由此产生的全部不利责任将全部由用户自身承担；用户理解并同意，转转有权应政府部门（包括司法及行政部门）的要求，向其提供用户在转转填写的注册信息和交易记录等必要信息。</Text>
            <View>
              <Text style={ZZRNGuizeStyle.plain}>5、您需确保自己对在转转发布的内容系您原创或已获得有效、完全的授权，不会侵犯任何主体的肖像权、名誉权、知识产权、隐私权等合法权益，也不会侵犯法人或其他团体的商标权、商业秘密等合法权益。如因此引起纠纷，转转有权直接立即删除或屏蔽该内容并要求您赔偿全部损失。您应确保您通过转转提交、发布的全部信息（包括但不限于个人信息、商品信息、言论及所作出的行为等）不包含以下内容：</Text>
              <View style={ZZRNGuizeStyle.contentList}>
                <Text style={ZZRNGuizeStyle.contentItem}>（1）违反国家法律法规、破坏国家统一、煽动民族仇恨、民族歧视、破坏民族团结的；</Text>
                <Text style={ZZRNGuizeStyle.contentItem}>（2）损害国家机关信誉、进行政治宣传或破坏国家宗教政策的；</Text>
                <Text style={ZZRNGuizeStyle.contentItem}>（3）宣扬封建迷信、淫秽、色情、赌博、暴力、凶杀、恐怖或教唆犯罪的；</Text>
                <Text style={ZZRNGuizeStyle.contentItem}>（4）侮辱、诽谤、恐吓、散播涉及他人隐私等侵害他人合法权益的；</Text>
                <Text style={ZZRNGuizeStyle.contentItem}>（5）捏造或歪曲事实，从事欺诈、虚假、不准确或误导性行为，扰乱社会秩序、平台交易秩序的；</Text>
                <Text style={ZZRNGuizeStyle.contentItem}>（6）侵犯他人知识产权或涉及第三方商业秘密及其他专有权利的；</Text>
                <Text style={ZZRNGuizeStyle.contentItem}>（7）存在可能破坏、篡改、删除、影响转转任何系统正常运行或未经授权秘密获取转转及其他用户的数据、个人资料的病毒、木马、爬虫等恶意软件、程序代码的；</Text>
                <Text style={ZZRNGuizeStyle.contentItem}>（8）其他违背社会公共利益或公共道德的。</Text>
              </View>
            </View>
            <Text style={ZZRNGuizeStyle.plain}>6、转转平台只允许每位用户使用一个转转平台账户。用户不得通过任何手段恶意注册转转帐号，包括但不限于以牟利、炒作、套现、获奖等为目的多个账号注册；不得盗用其他用户帐号；未经转转明确书面许可，亦不得转让、出租或者售卖转转账号。如有证据证明或转转平台有理由相信您存在不当注册或不当使用多个转转平台账户的情形，转转有权直接采取一切必要的措施，包括但不限于删除用户发布的内容、取消用户在平台获得的星级、荣誉以及虚拟财富，暂停、查封、冻结或关闭用户帐号，取消交易及因违规所获利益，拒绝提供服务等，乃至通过诉讼形式追究用户法律责任等。如给转转平台及相关方造成损失的，您还应承担赔偿责任。</Text>
            <Text style={ZZRNGuizeStyle.plain}>7、用户应当保证在使用转转平台进行交易的过程中遵守国家法律法规等规范文件及转转平台各项规则的规定和要求，不损害他人的合法权益，不在交易过程中采取不正当竞争行为，不扰乱网上交易的正常秩序，不从事与交易无关的行为；用户在使用转转服务过程中所产生的运费、应纳税费（含发票开具等），以及其他相关费用，均由用户独自承担。用户如发现其他用户有违法或违反本协议的行为，可以向转转进行反映并建议处理。</Text>
            <Text style={ZZRNGuizeStyle.plain}>8、转转平台存在“一口价”和“拍卖”两种出价形式。在拍卖形式下，您理解转转平台并非《中华人民共和国拍卖法》规定的“拍卖人”，转转平台仅为用户以竞价形式购买商品及/或服务的在线交易场所。同时，您知悉并了解闲置物品/服务交易纠纷及风险高于普通物品/服务交易，转转用户需在转转内对交易细节进行详细、客观的沟通约定，并遵守相应的约定事项。若因交易约定不详导致的交易纠纷，除法律另有明确规定外，由转转用户自行承担风险和损失。</Text>
            <Text style={ZZRNGuizeStyle.emphsis}>9、您知悉并了解，鉴于线下见面交易存在较大的人身财产安全及交易纠纷风险，转转推荐您使用转转平台担保交易服务。如您脱离平台担保交易而选择线下见面交易的，交易双方在线下交易中应尽到合理的谨慎注意义务，买方有权要求卖方提供真实身份信息（包括但不限于身份证、姓名、联系方式、地址等）并对购买的商品/服务进行审查、验货合格后再行支付交易价款。如因线下见面交易产生纠纷及风险，除法律另有明确规定外，由您自行承担全部损失和责任。您理解并同意，此等情况下，转转仅作为单纯的信息发布平台，既未参与双方的交易，亦未就交易活动收取费用，对您因线下交易产生的纠纷/责任/索赔等免责。</Text>
            <Text style={ZZRNGuizeStyle.plain}>
              10、除法律另有明确规定或本协议另有约定外，用户明确知悉并同意：
              <Text style={ZZRNGuizeStyle.emphsis}>用户应对转转账户项下的所有行为结果包括但不限于在线签署各种协议、发布信息以及通过转转软件与其它用户达成商品或服务交易关系之间的全部事宜（包括但不限于线下使用或提供商品或服务、服务或产品质量、款项支付的时限、金额及退款、发票开具等）独立承担全部法律责任。</Text>
            </Text>
            <View>
              <Text style={ZZRNGuizeStyle.plain}>11、用户在转转上交易过程中如与其他用户因交易产生争议/纠纷的，可以选择以下途径解决：</Text>
              <View style={ZZRNGuizeStyle.contentList}>
                <Text style={ZZRNGuizeStyle.contentItem}>（1）与争议相对方自主协商；</Text>
                <Text style={ZZRNGuizeStyle.contentItem}>（2）使用转转平台提供的争议调处（亦称“居间仲裁”）服务；</Text>
                <Text style={ZZRNGuizeStyle.contentItem}>（3）请求消费者协会或者其他依法成立的调解组织调解；</Text>
                <Text style={ZZRNGuizeStyle.contentItem}>（4）向有关行政部门投诉；</Text>
                <Text style={ZZRNGuizeStyle.contentItem}>（5）根据与争议相对方达成的仲裁协议（如有）提请仲裁机构仲裁；</Text>
                <Text style={ZZRNGuizeStyle.contentItem}>（6）向人民法院提起诉讼。</Text>
              </View>
            </View>
            <Text style={ZZRNGuizeStyle.plain}>12、如您依据转转相关规则选择使用转转提供的争议调处服务，则表示您认可并愿意履行转转客服作为独立的第三方根据其所了解到的争议事实并依据转转相关规则所作出的调处决定（包括调整相关订单的交易状态、判定将争议款项的全部或部分支付给交易一方或双方等）。在转转平台调处决定作出前，您可选择本协议第5.9条第（3）、（4）、（5）、（6）途径（下称“其他争议处理途径”）解决争议以中止转转平台的争议调处服务。在转转平台调处决定做出后，如您对调处决定不满意，您仍有权采取其他争议处理途径解决争议，但通过其他争议处理途径未取得终局决定前，您仍应先履行调处决定。转转不保证争议处理结果符合您的期望，除因转转单方原因故意或重大过失导致您产生损失的情况外，转转不对转转依据转转相关规则做出的争议处理结果承担责任。</Text>
          </View>
          <View>
            <Text style={ZZRNGuizeStyle.headerh2}>第六条 转转的权利和义务</Text>
            <Text style={ZZRNGuizeStyle.plain}>1、对于用户在转转网上平台上的不当行为或其它任何转转认为应当终止服务的情况，转转有权随时作出删除相关信息、终止服务等处理，而无须征得用户的同意。</Text>
            <Text style={ZZRNGuizeStyle.emphsis}>2、凡有用户恶意注册（为达到某种不正当的目的，进行非正常注册）转转帐号或产生作弊交易一经发现，转转均有权取消该用户在本平台的一切权利、权益，包括但不限于注销该用户相关信息、冻结其帐号、停止所有服务等处理，而无须征得用户的同意。</Text>
            <View>
              <Text style={ZZRNGuizeStyle.plain}>3、因网上转转平台的特殊性，转转对所有用户的注册登录信息会进行审核，但仅限于通过微信账号登录及手机绑定的审核，如存在下列情况之一的，转转有权根据不同情况选择保留或删除相关信息或继续、停止对该用户提供服务，并追究相关法律责任。</Text>
              <View style={ZZRNGuizeStyle.contentList}>
                <Text style={ZZRNGuizeStyle.contentItem}>（1）用户或其它第三方通知转转，认为某个具体用户或具体事项可能存在重大问题；</Text>
                <Text style={ZZRNGuizeStyle.contentItem}>（2）用户或其他第三方向转转投诉举证转转平台上有违法或不当行为的，转转以普通非专业知识水平标准对相关内容进行判别，可以明显认为这些内容或行为具有违法或不当性质的。</Text>
              </View>
            </View>
            <Text style={ZZRNGuizeStyle.plain}>4、经国家生效法律文书或行政处罚决定确认用户存在违法行为，或者转转有足够事实依据可以认定用户存在违法或违反服务协议行为的，转转有权在转转平台及所在网站上以网络发布形式公布用户的违法行为，以提示其他用户注意判断评估交易风险。</Text>
            <Text style={ZZRNGuizeStyle.plain}>5、对于用户在转转平台发布的部分不合理信息，转转有权在不通知用户的前提下进行删除、屏蔽或采取其它限制性措施。此类不合理信息包括但不限于：</Text>
            <Text style={ZZRNGuizeStyle.plain}>①以进行商业代购或商业买卖为目的信息；</Text>
            <Text style={ZZRNGuizeStyle.plain}>②以炒作不实信用为目的的信息；</Text>
            <Text style={ZZRNGuizeStyle.plain}>③转转有理由相信存在欺诈等恶意或虚假内容的信息；</Text>
            <Text style={ZZRNGuizeStyle.plain}>④转转有理由相信与物品交换无关或不是以交换为目的的信息；</Text>
            <Text style={ZZRNGuizeStyle.plain}>⑤转转有理由相信存在恶意扰乱正常转转秩序因素的信息；</Text>
            <Text style={ZZRNGuizeStyle.plain}>⑥转转有理由相信该信息违反公共利益或可能严重损害转转和其它用户合法利益的。</Text>
          </View>
          <View>
            <Text style={ZZRNGuizeStyle.headerh2}>第七条 拒绝担保和责任范围</Text>
            <Text style={ZZRNGuizeStyle.plain}>1、本协议向下，转转将按“现状”和“可得到”的状态向用户提供转转服务，将在现有技术的基础上尽最大努力提供相应的安全措施以保障服务安全和正常运行。转转不对转转服务所涉及的技术及信息的是否有效、准确、正确、可靠以及其质量、稳定、完整和及时性作出任何承诺和保证；亦对转转服务不作任何明示或暗示的保证，包括但不限于转转服务的是否适用、是否存在错误或疏漏、是否具有持续、准确、可靠等性能、是否适用于某一特定用途等。</Text>
            <Text style={ZZRNGuizeStyle.plain}>2、除本协议另有约定外，转转仅向您提供转转平台服务，您了解转转平台上的信息系用户自行发布，由于海量信息的存在，转转平台无法杜绝可能存在风险和瑕疵。您应谨慎判断确定相关信息的真实性、合法性和有效性，并注意保留相应的证据以利于维权，并尽量采用转转建议的交易方式进行交易，以避免造成人身财产损失。</Text>
            <View>
              <Text style={ZZRNGuizeStyle.plain}>3、转转平台与其他的在线使用的互联网网站一样，也会受到各种不良信息、网络安全和网络故障问题的困扰，包括但不限于：</Text>
              <View style={ZZRNGuizeStyle.contentList}>
                <Text style={ZZRNGuizeStyle.contentItem}>（1）其他用户可能会发布诈骗或虚假信息，或者发表有谩骂、诅咒、诋毁、攻击内容的，或者含有淫秽、色情、下流、反动、煽动民族仇恨等让人反感、厌恶的内容的非法言论；</Text>
                <Text style={ZZRNGuizeStyle.contentItem}>（2）其他用户可能会发布一些侵犯您或者其他第三方知识产权、肖像权、姓名权、名誉权、隐私权和/或其他合法权益的图片、照片、文字等资料；</Text>
                <Text style={ZZRNGuizeStyle.contentItem}>（3）面临着诸如黑客攻击、计算机病毒困扰、系统崩溃、网络掉线、网速缓慢、程序漏洞等问题的困扰和威胁。</Text>
              </View>
              <Text style={ZZRNGuizeStyle.plain}>&nbsp;&nbsp;您充分了解并同意：上述的各种不良信息、网络安全和网络故障问题，并不是转转或者转转平台所导致的问题，由此可能会造成您感到反感、恶心、呕吐等精神损害，或者给您造成其他的损失，概由您自行承担，转转无须向您承担任何责任。</Text>
            </View>
            <Text style={ZZRNGuizeStyle.emphsis}>4、转转仅作为个人闲置物品信息发布及交易平台，就用户之间的物品交易活动提供平台以展示物品/服务信息、寻找交易对象、就物品/服务的交易提供担保服务，除平台另有协议/规则说明外，转转并不作为交易双方之任何一方的身份参与交易物品行为，且转转不负责对交易物品的货品或服务进行审核、无法控制交易物品所涉及的物品的质量、安全或合法性，商品信息的真实性或准确性，以及交易各方履行其在交易协议中各项义务的能力。本协议的签署并不意味着转转为转转平台上交易双方的行为合法性、有效性及货品的真实性、合法性、有效性提供任何明示或暗示的担保或承诺。</Text>
            <View>
              <Text style={ZZRNGuizeStyle.plain}>5、用户明确理解和同意，转转不对因下述任一情况而导致的任何损害赔偿承担责任，包括但不限于商誉、使用、数据、利润等方面的损失或其它无形损失的损害赔偿 (无论转转是否已被告知该等损害赔偿的可能性)：</Text>
              <View style={ZZRNGuizeStyle.contentList}>
                <Text style={ZZRNGuizeStyle.contentItem}>（1）第三方未经批准的接入或更改用户的传输数据或数据；</Text>
                <Text style={ZZRNGuizeStyle.contentItem}>（2）通过转转平台服务购买或获取任何商品、样品、数据、信息等行为或替代行为产生的费用及损失；</Text>
                <Text style={ZZRNGuizeStyle.contentItem}>（3）第三方对“服务”的声明或关于“服务”的行为；或非因转转的原因而引起的与“服务”有关的任何其它事宜，包括疏忽。</Text>
                <Text style={ZZRNGuizeStyle.contentItem}>（4） 您对转转平台服务的误解；</Text>
                <Text style={ZZRNGuizeStyle.contentItem}>（5）任何非因转转的原因而引起的与转转平台服务有关的其它损失。</Text>
              </View>
            </View>
            <Text style={ZZRNGuizeStyle.plain}>6、所有发给用户的通告，转转都将通过正式的页面公告、站内信、电子邮件、客服电话、手机短信或常规信件送达。任何非经转转正规渠道获得的中奖、优惠等活动或信息，转转不承担法律责任。</Text>
            <Text style={ZZRNGuizeStyle.emphsis}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;用户明确理解并同意，如因其违反有关法律或者本协议之规定，使转转遭受任何损失，受到任何第三方的索赔，或任何行政管理部门的处罚，用户应对转转提供补偿，包括合理的律师费用。</Text>	
          </View>
          <View>
            <Text style={ZZRNGuizeStyle.headerh2}>第八条 侵权投诉 </Text>
            <Text style={ZZRNGuizeStyle.plain}>1、据《中华人民共和国侵权责任法》第三十六条，任何第三方认为，用户利用转转平台侵害本人民事权益或实施侵权行为的，包括但不限于侮辱、诽谤等，被侵权人有权书面通知转转采取删除、屏蔽、断开链接等必要措施。</Text>
            <Text style={ZZRNGuizeStyle.plain}>2、任何第三方（包括但不限于企业、单位或个人等）认为转转用户发布的任何信息侵犯其合法权益的，在有充分法律法规及证据足以证明的情况下，可以通过邮箱通知转转：zz.qq@zhuanzhuan.com</Text>
            <View>
              <Text style={ZZRNGuizeStyle.plain}>3、侵权投诉必须包含以下信息：</Text>
              <View style={ZZRNGuizeStyle.contentList}>
                <Text style={ZZRNGuizeStyle.contentItem}>（1）被侵权人的姓名（名称）、联系方式、地址、电子邮件等；</Text>
                <Text style={ZZRNGuizeStyle.contentItem}>（2）侵权的具体信息网址、编号或其他可以找到该信息的细节；</Text>
                <Text style={ZZRNGuizeStyle.contentItem}>（3）您是所述的版权或者其他权利的合法拥有者的权利证明；</Text>
                <Text style={ZZRNGuizeStyle.contentItem}>（4）您的身份证复印件、营业执照等其他相关资料。</Text>
                <Text style={ZZRNGuizeStyle.contentItem}>（5）投诉内容须纳入以下声明：“本人本着诚信原则，有证据认为该对象侵害本人或他人的合法权益。本人承诺投诉全部信息真实、准确，否则自愿承担一切后果。”</Text>
                <Text style={ZZRNGuizeStyle.contentItem}>（6）本人亲笔签字并注明日期，如代理他人投诉的，必须出具授权人签字的授权书。</Text>
              </View>
              <Text style={ZZRNGuizeStyle.emphsis}>&nbsp;&nbsp;权利人应当对通知书的真实性负责。转转用户在提起投诉之前咨询法律顾问或律师。我们提请用户注意：如果对侵权投诉不实，则用户可能承担法律责任。</Text>
            </View>
          </View>
          <View>
            <Text style={ZZRNGuizeStyle.headerh2}>第九条 信息获取及保护</Text>
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => this._onPress()}
            >
              <View>
                <Text style={ZZRNGuizeStyle.plain}>1、转转非常重视用户个人信息（即以电子或者其他方式记录的能够单独或与其他信息结合识别特定用户身份的信息）保护，在您使用转转提供的服务时，您同意遵守转转转平台公布并不时修订的
                <Text style={ZZRNGuizeStyle.jumpHref}>隐私权条款</Text>
                ，隐私权条款构成本协议的有效组成部分，亦同意转转按照隐私权条款手机、存储、使用、披露和保护您的个人信息。</Text>
              </View>
            </TouchableOpacity>
            <Text style={ZZRNGuizeStyle.plain}>2、您知悉并同意，为向您提供更安全的服务，在适用法律允许的范围内，转转可能为安全目的采取必要的技术手段获取您在使用转转过程中的相关信息。</Text>
            <Text style={ZZRNGuizeStyle.plain}>3、转转要求各搜索引擎遵循行业规范，即“拒绝 Robots 访问标准”(Robots Exclusion Standard)，否则将视你的抓取行为是对转转平台财产权利和知识产权的侵犯，转转有权通过法律诉讼维护平台利益。</Text>
          </View>
          <View>
            <Text style={ZZRNGuizeStyle.headerh2}>第十条 知识产权保护</Text>
            <Text style={ZZRNGuizeStyle.plain}>1、任何用户接受本协议，即表明该用户主动将其在任何时间段在本平台上传、发布的任何形式的信息内容（包括但不限于图片、音频、视频、商品咨询及评价、各类话题文章等）的财产性权利等任何可转让的权利，如著作财产权，包括并不限于：复制权、发行权、出租权、展览权、表演权、放映权、广播权、信息网络传播权、摄制权、改编权、翻译权、汇编权等，以及应当由著作权人享有的其他可转让权利无偿独家且不可撤销地转让给转转运营者所有，同时表明该用户许可转转有权利就任何主体侵权而单独提起诉讼，并获得全部赔偿。本协议已经构成《中华人民共和国著作权法》第二十五条（条文序号依照2011年版著作权法确定）及相关法律所规定的著作财产权等权利转让书面协议，其效力及于用户在转转发布的任何受著作权法保护的作品内容，无论该内容形成于本协议签订前还是本协议签订后。用户同意并明确了解上述条款，不将已发表于本平台的信息，以任何形式发布或授权其它网站（及媒体）使用。</Text>
            <Text style={ZZRNGuizeStyle.plain}>2、转转许可软件的一切版权、商标权、专利权、商业秘密以及与转转相关的所有信息内容包括但不限于作品、图片、文字表述及其组合、音频、视频、图标、档案资料、网站构架、网站版面框架、网页设计、有关数据、印刷材料、电子文档等，均受中华人民共和国著作权法、商标法、专利法、反不正当竞争法和相应国际条约以及其他知识产权法律法规的保护，除涉及第三方授权的软件或技术外，转转享有上述知识产权。未经转转书面同意，任何人不得为任何营利性或非营利性的目的自行使用（包括但不限于以非法方式复制、传播、展示、镜像、上载、下载、修改、出租、出借、出售、散布转转平台的上述任何资料和资源，或根据上述资料和资源制作成任何种类产品）、转让或者许可任何第三方使用、转让上述知识产权。转转保留追究上述未经许可行为的法律责任的权利。</Text>
            <Text style={ZZRNGuizeStyle.plain}>3、本公司是转转平台的制作者,拥有此平台内容及资源的版权,受国家知识产权保护,享有对本平台各种协议、声明的修改权；本平台上所有内容的汇编是转转的排他财产，受中国和国际版权法的保护。除法律另有强制性规定外，未经转转的明确书面许可，任何第三方不得为任何私人或商业目的获取或使用本平台的任何部分或通过本平台可直接或间接获得的任何内容、服务或资料。任何第三方违反本协议的规定以任何方式，和/或以任何文字对本平台的任何部分进行发表、复制、转载、更改、引用、链接、下载、抓取或以其他方式进行使用，或向任何其他第三方提供获取本平台任何内容的渠道，则对本平台的使用权将立即终止，且任何第三方必须按照本公司的要求，归还或销毁使用本平台任何部分的内容所创建的资料的任何副本。</Text>
            <Text style={ZZRNGuizeStyle.plain}>4、转转未向任何第三方转让本网站或其中的任何内容所相关的任何权益或所有权，且一切未明确向任何第三方授予的权利均归转转所有。未经本协议明确允许而擅自使用本平台任何内容、服务或资料的，构成对本协议的违约行为，且可能触犯著作权、商标、专利和/或其他方面的法律法规，转转保留对任何违反本协议规定的第三方（包括单位或个人等）提起法律诉讼的权利。</Text>
          </View>
          <View>
            <Text style={ZZRNGuizeStyle.headerh2}>第十一条 协议终止和违约责任</Text>
            <Text style={ZZRNGuizeStyle.plain}>1、您应理解按本协议约定使用转转，按规范使用许可软件、按本协议约定履行义务是您获取转转授权使用软件、提供转转服务的前提，如您严重违反本协议，转转将终止提供服务，本协议终止。在本使用许可终止时，您应停止对许可软件的使用行为, 并销毁许可软件的全部副本。您在协议终止前的行为所导致的任何责任，您应完全且独立地承担。</Text>
            <Text style={ZZRNGuizeStyle.plain}>2、一旦您违反本协议或，转转有权对您的权益采取限制措施，包括中止、终止对您提供部分或全部服务，且在经营或实际控制的平台依法公示您的违约情况。</Text>
            <Text style={ZZRNGuizeStyle.plain}>3、如您违反法律法规或本协议约定的条款，给其他用户造成损失或使转转遭受任何损失/受到任何第三方的索赔/受到任何行政管理部门的处罚的，您必须承担全部的赔偿责任。如转转因此向第三方进行了赔偿或补偿，则您同意赔偿转转的相关支出和损失，包括合理的律师费用。同时，转转有权依据本协议的约定，对用户的账户及发布的信息做出相应处理措施，包括但不限于直接屏蔽、删除侵权信息或直接关闭账号、停止服务，且无须征得您的同意或提前通知您。</Text>
            <Text style={ZZRNGuizeStyle.plain}>4、转转有权单方认定您行为的性质及是否构成对本协议和/或规则的违反，并据此采取相应的处理措施。对于用户涉嫌违反本协议承诺/约定的行为对任意第三方造成损害的，用户均应当以自己的名义独立承担所有的法律责任，并应确保转转免于承担因此产生的损失或增加的费用。</Text>
          </View>
          <View style={ZZRNGuizeStyle.lastView}>
            <Text style={ZZRNGuizeStyle.headerh2}>第十二条 其他约定</Text>
            <Text style={ZZRNGuizeStyle.plain}>1、本协议适用中华人民共和国大陆地区法律。
              <Text style={ZZRNGuizeStyle.emphsis}>因转转与用户就本协议所引起或与其有关的任何争议应由协议签订地北京市海淀区人民法院管辖。因级别管辖的规定，北京市海淀区人民法院无管辖权的，以其上级法院作为第一审管辖法院。</Text>
            </Text>
            <Text style={ZZRNGuizeStyle.plain}>2、任一方未经对方同意，不得将协议权利义务转让第三方。转转可基于服务需要，变更或增加履约主体，此等变更不会影响您在本协议项下的权益。如您继续使用转转服务的，视为同意变更后的主体或新增的主体作为与您履约的相对方。上述主体的变更转转将通过页面公告等方式向您发出通知。</Text>
            <Text style={ZZRNGuizeStyle.plain}>3、本协议任一条款被视为废止、无效或不可执行，该条应视为可分的且并不影响本协议其余条款的有效性及可执行性。</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

module.exports = ZZRNGuize;