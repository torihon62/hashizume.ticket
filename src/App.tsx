import React from 'react';
import './App.css';
import { createStyles, Grid, makeStyles, Step, StepContent, StepLabel, Stepper, Typography } from '@material-ui/core';

const useStyles = makeStyles(() =>
	createStyles({
		header: {
			height: '400px',
			padding: '5%',
			display: 'flex',
			justifyContent: 'center',
			flexDirection: 'column',
			color: 'white',
			background: 'no-repeat url("./background_.png")',
			backgroundSize: 'cover',
		},
		content: {
			padding: '50px 5% 50px 5%',
			width: '100%',
			display: 'flex',
			flexDirection: 'column',
			minHeight: '200px',
		},
		contentCenter: {
			padding: '50px 5% 50px 5%',
			width: '100%',
			display: 'flex',
			justifyContent: 'center',
			minHeight: '200px',
		},
		brown: {
			background: '#f2ebe6',
		},
		section: {
			paddingTop: '50px',
			width: '100%',
			display: 'flex',
			justifyContent: 'center',
		},
		flyer: {
			width: '80%',
		},
		logo: {
			borderRadius: '50%',
			width: '300px',
			height: '300px',
		},
		formContainer: {
			display: 'flex',
			justifyContent: 'center',
		},
		form: {
			position: 'relative',
			width: '100%',
			height: '500px',
			overflowY: 'scroll',
			'& iframe': {
				paddingTop: '50px',
				position: 'absolute',
				top: 0,
				left: 0,
				width: '100%',
				height: '100%',
			},
		},
	})
);

function App() {
	const classes = useStyles();
	return (
		<>
			<Grid container>
				<Grid className={classes.header} item xs={12}>
					<Typography>スタジオエコー主催</Typography>
					<br />
					<Typography>オーディオドラマライブ</Typography>
					<Typography>【フランケンシュタイン】</Typography>
					<h1 style={{ marginBottom: 0 }}>チケット申し込みサイト</h1>
					<Typography>(橋爪専用ページ)</Typography>
				</Grid>
				<Grid className={classes.section} item xs={12}>
					<h2>公演延期のお知らせ</h2>
				</Grid>
				<Grid className={classes.content} item xs={12}>
					<Typography>
						この度、緊急事態宣言の延長を受け、座席数の制限が発生したことにより、より多くのお客様に見ていただくべく、公演日程が7月2日(金)、3日(土)へと延期することが決まりました。
					</Typography>
					<Typography>楽しみにしてくださった皆さま、大変申し訳ございません。</Typography>
					<br />
					<Typography>
						お振り込みいただきましたチケット代の返金に関しまして、ご登録いただいたメールアドレスへ5月11日(火)より、ご連絡させて頂きます。
					</Typography>
					<br />
					<Typography>皆さまにはお手数をおかけ致しまして、大変申し訳ございません。</Typography>
					<Typography>7月2日、3日の公演でもぜひ応援していただけましたら幸いです。</Typography>
					<br />
					<Typography>
						役と向き合う時間が増えたことで、より良いものをお見せしたいと決意を新たにしております。
					</Typography>
					<br />
					<Typography>みなさまも、笑顔でお会い出来る日まで、</Typography>
					<Typography>どうぞお気をつけてお過ごしください。</Typography>
					<br />
					<Typography>何卒よろしくお願いいたします。</Typography>
					<br />
					<br />
					<Typography>橋爪紋佳</Typography>
				</Grid>
				<Grid className={classes.section} item xs={12}>
					<h2>作品紹介</h2>
				</Grid>
				<Grid className={classes.content} item xs={12} md={6}>
					<Typography>天才科学者フランケンシュタインは、ある日、ついに人造人間を作りだした。</Typography>
					<Typography>しかしそれは、醜い「怪物」であり、完璧な人間ではなかった。</Typography>
					<br />
					<Typography>絶望と恐怖に追い詰められ、狂っていくフランケンシュタイン。</Typography>
					<Typography>「怪物」はやがて孤独に絶望し、自分を生みだした男への復讐を誓う―</Typography>
					<br />
					<br />
					<Typography>
						これまで数多の映画、舞台、ミュージカルでも演じられてきた名作『フランケンシュタイン』。
					</Typography>
					<Typography>ゴシック小説の傑作として名高い、あの名作を、劇場でオーディオドラマライブ化！</Typography>
					<br />
					<Typography>
						(※ゴシック小説とは、18世紀末から19世紀初頭にかけて流行した神秘的、幻想的な小説。 ゴシックロマンス（Gothic
						Romance）とも呼ばれ、今日のSF小説やホラー小説の源流とも言われる。)
					</Typography>
				</Grid>
				<Grid className={classes.contentCenter} item xs={12} md={6}>
					<a target={'_blank'} href="./flyer.png">
						<img className={classes.flyer} src={'./flyer.png'} alt={'フランケンシュタイン_チラシ'} />
					</a>
				</Grid>

				<Grid style={{ background: '#f2ebe6' }} className={classes.section} item xs={12}>
					<h2>ごあいさつ</h2>
				</Grid>
				<Grid style={{ background: '#f2ebe6' }} className={classes.contentCenter} item xs={12} md={4}>
					<img className={classes.logo} src={'./logo_hashizume.jpeg'} alt={'橋爪紋佳'} />
				</Grid>
				<Grid style={{ background: '#f2ebe6' }} className={classes.content} item xs={12} md={8}>
					<Typography>こんにちは！橋爪紋佳です。</Typography>
					<br />
					<Typography>この度、オーディオドラマライブに出演することになりました。</Typography>
					<Typography>作品はあの名作『フランケンシュタイン』です。</Typography>
					<br />
					<Typography>
						コロナ禍で外出を自粛されている方や、お仕事柄劇場のような場所へ足を運べない方もいらっしゃることと存じます。
					</Typography>
					<Typography>
						そんなみなさまの『努力』を思うと、「ぜひ観に来てください！」と堂々宣伝することに、気が咎める思いです。
					</Typography>
					<br />
					<Typography>
						しかし、もしもご来場いただけるのであれば、こんなご時世だからこそ、「みなさまと一緒に作品を楽しみたい」そう思っております。
					</Typography>
					<br />
					<Typography>会場はあの「エコー劇場」。</Typography>
					<Typography>何度もお芝居を拝見しては、</Typography>
					<Typography>(いつか立ってみたいなあ･･･)と、密かに憧れていた劇場です。</Typography>
					<br />
					<Typography>そんな私の夢が叶う機会を、</Typography>
					<Typography>応援していただけませんでしょうか。</Typography>
					<Typography>近くで、見守っていただけないでしょうか。</Typography>
					<br />
					<Typography>ご来場、心よりお待ちしております。</Typography>
					<br />
					<Typography>事情があって来られない、という方も、</Typography>
					<Typography>ここまでお読みくださり、本当にありがとうございます。</Typography>
					<br />
					<Typography>いつも応援してくださるみなさまに、お返しする方法は、これだから。</Typography>
					<br />
					<Typography>元気を、感動を、お届けしたいと思います。</Typography>
					<br />
					<br />
					<Typography>紋佳</Typography>
				</Grid>

				<Grid className={classes.section} item xs={12}>
					<h2>チケット申し込みの流れ</h2>
				</Grid>
				<Grid className={classes.contentCenter} item xs={12}>
					<Stepper orientation="vertical">
						<Step active={true}>
							<StepLabel>チケット申し込み受付フォームの送信</StepLabel>
							<StepContent>
								<Typography>
									本サイト内（一番下にあります）のチケット申し込み受付フォームに必要事項を記入の上、お申し込みください。
								</Typography>
							</StepContent>
						</Step>
						<Step active={true}>
							<StepLabel>自動返信メールの確認</StepLabel>
							<StepContent>
								<Typography>確認メール(返信メール)に記載されている口座へ、チケット代金をお振込みください。</Typography>
								<Typography>{'※ 恐れ入りますが、手数料のご負担をお願い致します(>_<)'}</Typography>
							</StepContent>
						</Step>
						<Step active={true}>
							<StepLabel>チケットの発送</StepLabel>
							<StepContent>
								<Typography>ご入金確認後、5月中旬にチケットを発送いたします。</Typography>
							</StepContent>
						</Step>
						<Step active={true}>
							<StepLabel>お問い合わせ先</StepLabel>
							<StepContent>
								<Typography>
									自動返信メールが届かないなど、ご不明な点がございましたら、以下のメールアドレスまでお問い合わせください。
								</Typography>
								<br />
								<Typography>hashizume.ticket[at-mark]gmail.com</Typography>
								<Typography>※[at-mark]は半角の@で置き換えてください。</Typography>
							</StepContent>
						</Step>
					</Stepper>
				</Grid>
				<Grid className={classes.section} item xs={12}>
					<h2>開催概要</h2>
				</Grid>
				<Grid style={{ paddingBottom: 0, paddingTop: 0 }} className={classes.content} item xs={12} md={6}>
					<h3>公演名</h3>
					<Typography>オーディオドラマライブ</Typography>
					<Typography>『フランケンシュタイン』</Typography>

					<h3>スタッフ</h3>
					<Typography>原作:メアリー・シェリー</Typography>
					<Typography>脚色:横山玲子</Typography>
					<Typography>演出:小見山佳典</Typography>
					<Typography>音楽・演奏:後藤沙希乃</Typography>
					<Typography>音響効果:山崎哲也</Typography>
					<Typography>舞台監督:松澤太陽</Typography>
					<Typography>照明:北島千尋(劇光社)</Typography>

					<h3>出演</h3>
					<Typography>加藤拓二 ケンコー 神 頼人 髙倉直人</Typography>
					<Typography>小桧山美樹 澤山佳小里 橋爪紋佳 宮山知衣</Typography>
				</Grid>
				<Grid style={{ paddingBottom: 0, paddingTop: 0 }} className={classes.content} item xs={12} md={6}>
					<h3>公演スケジュール</h3>
					<Typography>2021年5月28日(金) 18:00</Typography>
					<Typography>2021年5月29日(土) 12:30 / 16:30</Typography>
					<Typography>(各回、開場は45分前)</Typography>
					<h3>会場</h3>
					<Typography>恵比寿・エコー劇場</Typography>
					<Typography>東京都渋谷区東3-18-3 エコービル2F</Typography>
					<Typography>
						(アクセス/JR恵比寿駅西口、東京メトロ恵比寿駅
						1、2番出口より徒歩5分　※当施設には駐車場、駐輪場はございません。予めご了承ください。)
					</Typography>

					<h3>チケット</h3>
					<Typography>2,500円(自由席)</Typography>
				</Grid>
				<Grid className={classes.section} item xs={12}>
					<h2>新型コロナウイルス感染症拡大予防・ご来場のお客様に緊急連絡先ご記入のお願い</h2>
				</Grid>
				<Grid className={classes.content} item xs={12}>
					<Typography>
						今回、チケットと一緒に、「お客様の緊急連絡先・座席番号 ご記入カード」を同封いたします。
					</Typography>
					<br />
					<Typography>
						当日、『お座りになった座席の番号』をご記入いただき、劇場内にてスタッフが回収させていただくもので、万が一新型コロナウイルスに感染された方がご観劇された場合には、保健所に速やかに報告するとともに、ご来場様のお名前、緊急連絡先を保健所と共有させていただきます。
					</Typography>
					<Typography>
						いただいた個人情報はその他の目的には使用せず、公演日から4週間保管後、適切な手段で廃棄いたします。
					</Typography>
					<br />
					<Typography>ご来場くださったお客様をおまもりするために、</Typography>
					<Typography>ご協力の程、よろしくお願いいたします。</Typography>
				</Grid>
				<Grid className={classes.section} style={{ paddingBottom: 0 }} item xs={12}>
					<h3>▽　お申し込みはこちらから　▽</h3>
				</Grid>
				<Grid className={classes.section} style={{ paddingTop: 0 }} item xs={12}>
					<Typography style={{ fontSize: 'small' }}>
						※ スクロールがうまくできない方は
						<a
							rel="noreferrer"
							href={
								'https://docs.google.com/forms/d/e/1FAIpQLSeIjpgMJ3mPJGasDoCo_0qH95JT1AxXb_0tR9smKl1GTP4Siw/viewform?usp=sf_link'
							}
							target={'_blank'}
						>
							こちらをクリック
						</a>
					</Typography>
				</Grid>
				<Grid item xs={12} className={classes.formContainer}>
					<div className={classes.form}>
						<iframe
							title="ticket"
							src="https://docs.google.com/forms/d/e/1FAIpQLSeIjpgMJ3mPJGasDoCo_0qH95JT1AxXb_0tR9smKl1GTP4Siw/viewform?usp=pp_url&entry.1401218628=0%E6%9E%9A&entry.1825271642=0%E6%9E%9A&entry.1993608475=0%E6%9E%9A"
							frameBorder="0"
							marginHeight={0}
							marginWidth={0}
						>
							読み込んでいます…
						</iframe>
					</div>
				</Grid>
			</Grid>
		</>
	);
}

export default App;
