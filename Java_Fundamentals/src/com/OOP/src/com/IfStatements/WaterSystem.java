package com.IfStatements;

public class WaterSystem {

//    public static void main(String args[]){
        static int precipitation = 0;
        static int waterOutput = 0;
        static int temperature = 80;

        //start an if-statement
        public static void waterHoseSystemA() {
	        if (precipitation < 20){
	            waterOutput = 30;
	        }else if (precipitation < 31){
	            waterOutput = 10; 
	        }else if (precipitation < 56){
	            waterOutput = 0;
	        }else {
	            waterOutput = 0;
	        }
	
	        System.out.println("The water output should be " + waterOutput);
        }
        
        public static void waterHoseSystemB() {
            //start an if-statement
            if (precipitation < 20){
            	if (temperature <= 75){
                    waterOutput = 30;
                }
            	else {
                    waterOutput = 45;
                }
            }else if (precipitation < 31){
            	if (temperature <= 75){
                    waterOutput = 10;
                }
                else {
                    waterOutput = 25;
                } 
            }else if (precipitation < 56){
            	if (temperature <= 75){
                    waterOutput = 0;
                }
                else {
                    waterOutput = 15;
                }
            }else {
            	waterOutput = 0;
            }
            System.out.println("At this temperature, the water output should be " + waterOutput);
        }
}

