<template>
	<!-- <v-toolbar dark id="menu" class="redBackground py-0">
		<v-toolbar-title>J-Shop</v-toolbar-title>
		<div class="flex-grow-1"></div>
		<template #extension>
			<v-toolbar-items>
				<v-btn text>Link 1</v-btn>
				<v-btn text>Link 2</v-btn>
				<v-btn text>Link 3</v-btn>
			</v-toolbar-items>
		</template>
	</v-toolbar> -->
	<div>
		<v-app-bar
		 class="redBackground"
		 dark>
			<v-app-bar-nav-icon></v-app-bar-nav-icon>
			<v-icon>mdi-t-shirt-crew</v-icon>
			<v-toolbar-title>J-Shop</v-toolbar-title>
			<div class="flex-grow-1"></div>
			<v-btn icon>
				<v-icon>mdi-heart</v-icon>
			</v-btn>
			<v-btn icon>
				<v-icon>mdi-cart</v-icon>
			</v-btn>
			<!-- <v-menu
			 left
			 bottom>
				<template v-slot:activator="{ on }">
					<v-btn icon v-on="on">
						<v-icon>mdi-dots-vertical</v-icon>
					</v-btn>
				</template>
				<v-list>
					<v-list-item
					 v-for="n in 5"
					 :key="n"
					 @click="() => {}">
						<v-list-item-title>Option {{ n }}</v-list-item-title>
					</v-list-item>
				</v-list>
			</v-menu> -->
		</v-app-bar>
	</div>
</template>
<script>
export default {
	name: 'Navbar',
	data: () => ({
		//
	}),
};
</script>
<style scoped>
#menu {
	height: 0px !important;
}

.redBackground {
	background: linear-gradient(45deg, #E40000 0%, #212121 100%) !important;
}
</style>