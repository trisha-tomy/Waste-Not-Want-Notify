# WasteNotWantNotify

This is the basic setup of an application that can track food waste. I used a Bootstrap template ([SB Admin 2](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwicy7Gg5sCAAxV57DgGHVzNClQQFnoECB0QAQ&url=https%3A%2F%2Fstartbootstrap.com%2Ftheme%2Fsb-admin-2&usg=AOvVaw3GB6SsuLC2h8V6n2rWK4lW&opi=89978449)) and converted it to React.

To get the waste tracking functionality, I connected Firebase and made a new Collection for waste tracking. Currently it's a very rudimentary tracker with just two parameters, name of item, and its quantity. I plan to add more in the future.

On the Dashboard, at present I have just added the Food Waste Tracker without removing or editing the template further as this is still a working project. This is what it looks like currently:
![image](https://github.com/trisha-tomy/Waste-Not-Want-Notify/assets/122303927/5ccef36a-e642-4456-8fa8-1b75da7adfb3)

And this is the firestore database:
![image](https://github.com/trisha-tomy/Waste-Not-Want-Notify/assets/122303927/fde4b39e-906a-4401-9dde-91a5659feb79)


To add a new entry, we just enter the details and click on Add Item. This makes a new entry in the database, as shown:
![image](https://github.com/trisha-tomy/Waste-Not-Want-Notify/assets/122303927/e307cf50-e610-4ca9-882b-963d58475a99)
And it updates the table:
![image](https://github.com/trisha-tomy/Waste-Not-Want-Notify/assets/122303927/ccf16e1f-ecf0-4a3c-8a49-db450a54254d)
And it updates the Firestore database as well:
![image](https://github.com/trisha-tomy/Waste-Not-Want-Notify/assets/122303927/d477dba4-648a-4158-93b0-990d5e70c099)

In the future, I'm planning to add a Users daatabase as well making it accessile ot multiple users and allow waste tracking with better parameters in place (like units, for one, because one can't very well add 3 subjis, now can one)
