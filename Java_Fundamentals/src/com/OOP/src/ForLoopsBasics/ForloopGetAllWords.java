package ForLoopsBasics;


public class ForloopGetAllWords {

	
	public static void getAllWords(String words) {
		char[] ch = words.toCharArray();
		
		for(int i = 0; i < ch.length; i++ )    {
			 String  word = "";
			while(i < ch.length && ch[i] != ' ' ) {
				word = word + ch[i];
				i++;
			}
			
			if(word.length() > 0) {
			  System.out.println(word +" Size:  " + word.length() + " characters.");
			}
	
		}

	
		}
}
