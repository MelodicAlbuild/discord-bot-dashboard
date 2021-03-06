export default [
	{
		name: 'ping',
		displayName: 'Ping',
		category: 'games',
		description: 'Pong',
		examples: [
			{
				output: 'Pong!',
			},
		],
	},
	{
		name: 'pong',
		displayName: 'Pong',
		category: 'games',
		description: 'Ping',
	},
	{
		name: 'beep',
		displayName: 'Beep',
		category: 'games',
		description: 'Beep',
	},
	{
		name: 'memes',
		displayName: 'Memes',
		category: 'misc',
		description: 'Mememememememememememememememememes',
	},
	{
		name: 'lorem',
		displayName: 'Lorem ipsum',
		category: 'misc',
		description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt delectus officia vitae? Nesciunt aliquid quidem, quaerat cupiditate suscipit.',
	},
	{
		name: 'kick',
		displayName: 'Kick',
		category: 'admin',
		description: 'Kick a user.',
		examples: [
			{
				output: 'Please provide a valid user.',
			},
			{
				input: 'Some user',
				output: 'Kicked Some user#1234',
			},
		],
	},
	{
		name: 'ban',
		displayName: 'Ban',
		category: 'admin',
		description: 'Ban a user.',
	},
];
