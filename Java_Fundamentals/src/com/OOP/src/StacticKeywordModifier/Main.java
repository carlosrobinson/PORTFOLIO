package StacticKeywordModifier;

public class Main {

	@SuppressWarnings("unused")
	public static void main(String[] args) {
		// static = modifier. A single copy of a variable/method is created and shared 
		// The class owns the static number
		Friend friend1 = new Friend("Hulk Smash");
		Friend friend2 = new Friend("Superman");
		Friend friend3 = new Friend("Ironman");
		Friend friend4 = new Friend("Batman");
		Friend friend5 = new Friend("Silver Sufer");
		
		System.out.println(Friend.numberOfFriends);
		
 
	}

}
