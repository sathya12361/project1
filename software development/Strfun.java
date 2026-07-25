class Strfun{
        public static void main(String[] args) {
        String name="sathya";
        System.out.println(name.toUpperCase());
        System.out.println(name.toLowerCase());
        System.out.println(name); // immutable
        System.out.println(name.length());
        System.out.println(name.charAt(3));
        System.out.println(name.indexOf("h"));
        System.out.println(name.equals("sathya")); 
        System.out.println(name.equalsIgnoreCase("sathya"));
        System.out.println(name.substring(3));
        System.out.println(name.substring(0,4));
        System.out.println(name.concat("karur"));
        System.out.println(name.compareTo("arivu"));
        System.out.println(name.compareTo("manoj"));
        System.out.println("g".hashCode());  
        System.out.println("a".hashCode()); 
    }
}