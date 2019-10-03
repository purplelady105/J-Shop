<template>
	<v-app>
		<Navbar app></Navbar>
		<v-content>
			<HelloWorld />
		</v-content>
	</v-app>
</template>
<script>
import Navbar from './components/Navbar';
import HelloWorld from './components/HelloWorld';

export default {
	name: 'App',
	components: {
		Navbar,
		HelloWorld,
	},
	data: () => ({
		//
	}),
};
</script>