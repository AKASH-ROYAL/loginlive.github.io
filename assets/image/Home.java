import 'package:flutter/material.dart';
class Home extends StatefulWidget {
  const Home({Key? key}) : super(key: key);

  @override
  State<Home> createState() => _HomeState();
}

class _HomeState extends State<Home> {
  @override
  Widget build(BuildContext context) {
  return Scaffold(
    appBar: AppBar(

    ),

    body: SafeArea(child:Center(
      child: Column(
        children: [
          SizedBox(
            height: 40,
          ),
         /* ElevatedButton.icon(onPressed: (){
            Navigator.pushNamed(context, '/time    ww');
          },
            style: ButtonStyle(

              foregroundColor: MaterialStateProperty.all(Colors.black),
              backgroundColor: MaterialStateProperty.all(Color(0xfffafafa)),
            ),

            icon:Icon(Icons.watch_later_sharp,size: 44,),
            label: Text('Timings Pro'),),*/
          ElevatedButton.icon(
            style: ButtonStyle(
                     backgroundColor: MaterialStateProperty.all(Color(0xfffafafa)),
                  foregroundColor: MaterialStateProperty.all(Colors.black),
            ),
            onPressed: (){
              Navigator.pushNamed(context, '/edit_location');
            },
              icon: Icon(Icons.location_on,size: 30,),
              label: Text("Edit location"),
          ),
          ElevatedButton.icon(onPressed: (){
            Navigator.pushNamed(context, '/loading');
          },
            style: ButtonStyle(

              foregroundColor: MaterialStateProperty.all(Colors.black),
              backgroundColor: MaterialStateProperty.all(Color(0xfffafafa)),
            ),

            icon:Icon(Icons.access_time_filled,size: 30,),
            label: Text('Loaded time'),),
          ElevatedButton.icon(onPressed: (){
            Navigator.pushNamed(context, '/account');
          },
            style: ButtonStyle(

              foregroundColor: MaterialStateProperty.all(Colors.black),
              backgroundColor: MaterialStateProperty.all(Color(0xfffafafa)),
            ),

            icon:Icon(Icons.account_circle,
            size: 30,),
            label: Text('Profile Page'),),
          ElevatedButton.icon(onPressed: (){
            Navigator.pushNamed(context, '/lists');
          },
            style: ButtonStyle(

              foregroundColor: MaterialStateProperty.all(Colors.black),
              backgroundColor: MaterialStateProperty.all(Color(0xfffafafa)),
            ),

            icon:Icon(Icons.list_alt_rounded,
            size: 30,),
            label: Text('Quotes Lists'),),



        ],
      ),
    )),
    floatingActionButton: FloatingActionButton(onPressed: (){
      Navigator.pushReplacementNamed(context, '/home');
    },
      child: Text('click'),
    ),
    drawer: Drawer(
    // space to fit everything.
    child: ListView(
    // Important: Remove any padding from the ListView.
    padding: EdgeInsets.zero,
    children: [
    const DrawerHeader(
    decoration: BoxDecoration(
    color: Colors.blue,
    ),
    child: Text('Drawer Header'),
  ),
    ListTile(
    title: const Text('Item 1'),
    onTap: () {
    // Update the state of the app
    // ...
    // Then close the drawer
    Navigator.pop(context);
    },
    ),
    ListTile(
    title: const Text('Item 2'),
    onTap: () {
    // Update the state of the app
    // ...
    // Then close the drawer
    Navigator.pop(context);
    },
    ),
    ],
    ),
    ),

  );
  }
}

