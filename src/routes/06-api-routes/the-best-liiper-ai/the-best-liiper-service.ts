const liipers: string[] = [
	'https://liip.rokka.io/zebra_squared/2fb05bdf4af4682bcb13f22f417a620a9d6e7760.jpeg',
	'https://liip.rokka.io/zebra_squared/8a4b00f476d4c8bb61dc28c731e4578ce55e7709.jpeg',
	'https://liip.rokka.io/zebra_squared/156f4bcf16714b7a7fa1f97b33ee23735ce38502.jpeg',
	'https://liip.rokka.io/zebra_squared/95d306975c39d164ebeee4352fec83ea582f68cb.jpeg',
	'https://liip.rokka.io/zebra_squared/07280d545a0949df70920a062c560155b061010f.jpeg',
	'https://liip.rokka.io/zebra_squared/4afeedd436a989a316aababba99491369fbe028e.jpeg',
	'https://liip.rokka.io/zebra_squared/26f68b4dffd79c7a0369b115d8d7da80d0f9368f.jpeg',
	'https://liip.rokka.io/zebra_squared/e89158babefbd732b550786a0a9ac5d53192606d.jpeg',
	'https://liip.rokka.io/zebra_squared/53644be08b3dab2e63711d168ffcdc4977df312a.jpeg',
	'https://liip.rokka.io/zebra_squared/2eaf8d42a26dfb54c5681fe564873320c107cd91.jpeg',
	'https://liip.rokka.io/zebra_squared/2eaf8d42a26dfb54c5681fe564873320c107cd91.jpeg',
	'https://liip.rokka.io/zebra_squared/2eaf8d42a26dfb54c5681fe564873320c107cd91.jpeg',
	'https://liip.rokka.io/zebra_squared/2eaf8d42a26dfb54c5681fe564873320c107cd91.jpeg',
	'https://liip.rokka.io/zebra_squared/2eaf8d42a26dfb54c5681fe564873320c107cd91.jpeg',
	'https://liip.rokka.io/zebra_squared/2eaf8d42a26dfb54c5681fe564873320c107cd91.jpeg',
	'https://liip.rokka.io/zebra_squared/2eaf8d42a26dfb54c5681fe564873320c107cd91.jpeg',
	'https://liip.rokka.io/zebra_squared/2eaf8d42a26dfb54c5681fe564873320c107cd91.jpeg',
	'https://liip.rokka.io/zebra_squared/2eaf8d42a26dfb54c5681fe564873320c107cd91.jpeg',
	'https://liip.rokka.io/zebra_squared/e354ae7febf159db1122c7209f9b18faaa0c980d.jpeg',
	'https://liip.rokka.io/zebra_squared/f9bd0ec27ee31032c2f19cc5145bf915ce9cde2e.jpeg',
	'https://liip.rokka.io/zebra_squared/78c91cb7492a9bc3cfd7c51c4251b224f99ed8e0.jpeg',
	'https://liip.rokka.io/zebra_squared/4f701bdbed3477da806d8c8e7f7fbca0a98772d0.jpeg',
	'https://liip.rokka.io/zebra_squared/2fe1b4b804a9a437c4b3c52df8a50ddb0583ffe2.jpeg',
	'https://liip.rokka.io/zebra_squared/f79621b0282a0d74ce2e55b54dfcc2f093939418.jpeg',
];

const randomInteger = (min: number, max: number) => {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const getTheBestLiiper = (): string => liipers[randomInteger(0, liipers.length - 1)];
