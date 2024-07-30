import { createClient } from "@/src/utils/supabase/server";

export default async function Users() {
	const supabase = createClient();
	const { data: users } = await supabase.from("user").select();

	return <pre>{JSON.stringify(users, null, 2)}</pre>;
}