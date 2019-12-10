<template>
	<div class="home d-flex align-items-center">
	
		<div class="login-form">
			<div class="textbox-wrapper">
				<input v-model="username" type="text" placeholder="username" name="username">
	
				<input class="mr-0" v-model="password" type="password" placeholder="password" name="password">
			</div>
			<div class="button-wrapper d-flex align-items-center justify-content-end mt-4">
				<a class="forget-password-link" href="#">Forget Password?</a>
				<button v-on:click="login()">Login</button>
			</div>
		</div>
	</div>
</template>

<script>

export default {
	name: 'home',
	data() {
		return {
			username: '',
			password: '',

		}
	},

	mounted() {},



	methods: {
		login: function() {
			if (this.username ===  this.$store.state.username && this.password === this.$store.state.password) {
				window.location = "#/table";
			} else {
				alert('Hatalı giriş. Lütfen tekrar deneyiniz...')
			}
		}
	},
}
</script>

<style lang="scss">
	body, html, #app, .home{
		height: 100%;
	}

	.home {
		background-image: url('../assets/img/login.png');
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		.login-form {
			margin-left: 7%;
			.textbox-wrapper {
				input {
					border-radius: 15px;
					height: 50px;
					line-height: 50px;
					border-style: none;
					margin-right: 20px;
					padding: 20px;
					&:focus {
						outline: none;
					}
				}
			}
			.button-wrapper {
				.forget-password-link {
					color: grey;
					margin-right: 20px;
					&:focus {
						outline: none;
					}
				}
				button {
					border: 1px solid #ef307d;
					box-shadow: 0px 0px 30px -1px rgba(239,48,125,0.65);
					border-radius: 5px;
					border-radius: 5px;
					padding: 5px 20px;
					font-size: 13px;
					&:focus {
						outline: none;
					}
				}
			}
		}
	}
</style>