<script lang="ts">
	import { enhance } from '$app/forms';
	import Button from '$lib/components/ui/button/button.svelte';
	import * as Card from '$lib/components/ui/card';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
</script>

<div class="flex justify-center items-center h-screen">
	<Card.Root class="md:w-[400px] ">
		<Card.Header class="space-y-1">
			<Card.Title class="text-2xl">Login</Card.Title>
			<Card.Description>Enter your email below to create your account</Card.Description>
		</Card.Header>
		<form method="POST">
			<Card.Content class="grid gap-4">
				<div class="grid grid-cols-2 gap-6">
					<Button variant="outline">Github</Button>
					<Button variant="outline">Google</Button>
				</div>
				<div class="relative">
					<div class="absolute inset-0 flex items-center">
						<span class="w-full border-t" />
					</div>
					<div class="relative flex justify-center text-xs uppercase">
						<span class="bg-card px-2 text-muted-foreground"> Or continue with </span>
					</div>
				</div>
				<div class="grid gap-2">
					<Label for="email">Email</Label>
					<Input id="em" type="email" placeholder="m@example.com" name="email"/>
				</div>
				<div class="grid gap-2">
					<Label for="password">Password</Label>
					<Input id="ps" type="password" name="password"/>
				</div>
			</Card.Content>
			<Card.Footer>
				<Button class="w-full" type="submit">Create account</Button>
			</Card.Footer>
		</form>
	</Card.Root>
</div>
