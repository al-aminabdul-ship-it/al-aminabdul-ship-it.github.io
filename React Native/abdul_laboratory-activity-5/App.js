import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, ScrollView, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Images
const wallpaper = require('./assets/wallpaper.jpg');
const albumCover = require('./assets/album cover.jpg');
const profilePic = require('./assets/mukha.jpg');

// Lyrics Screen
const LyricsScreen = ({ route }) => (
  <ImageBackground source={wallpaper} style={styles.background}>
    <ScrollView contentContainerStyle={styles.lyricsScroll}>
      <View style={styles.lyricsContainer}>
        <Image source={albumCover} style={styles.albumArt} />
        <Text style={styles.songTitle}>{route.params.songTitle}</Text>
        <Text style={styles.lyricsText}>{route.params.lyrics}</Text>
      </View>
    </ScrollView>
  </ImageBackground>
);

// Home, Explore, and Library Screens
const HomeScreen = () => (
  <ImageBackground source={wallpaper} style={styles.background}>
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Home</Text>
      <Text style={styles.subHeader}>Featured Songs</Text>
      {['Iris - Goo Goo Dolls', 'Slide - Goo Goo Dolls', 'Black Balloon - Goo Goo Dolls'].map((song, index) => (
        <TouchableOpacity key={index} style={styles.songCard}>
          <Text style={styles.songCardText}>{song}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  </ImageBackground>
);

const ExploreScreen = () => (
  <ImageBackground source={wallpaper} style={styles.background}>
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Explore</Text>
      <Text style={styles.subHeader}>Trending Songs</Text>
      {['Broadway - Goo Goo Dolls', 'Dizzy - Goo Goo Dolls'].map((song, index) => (
        <TouchableOpacity key={index} style={styles.songCard}>
          <Text style={styles.songCardText}>{song}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  </ImageBackground>
);

const LibraryScreen = () => (
  <ImageBackground source={wallpaper} style={styles.background}>
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Library</Text>
      <Text style={styles.subHeader}>Your Songs</Text>
      {['Iris', 'Slide', 'Black Balloon', 'Broadway', 'Dizzy'].map((song, index) => (
        <TouchableOpacity key={index} style={styles.songCard}>
          <Text style={styles.songCardText}>{song}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  </ImageBackground>
);

// Custom Drawer
const CustomDrawerContent = (props) => (
  <DrawerContentScrollView {...props}>
    <View style={styles.drawerHeader}>
      <Image source={profilePic} style={styles.profilePic} />
      <View>
        <Text style={styles.profileName}>Al-amin ABDUL</Text>
        <Text style={styles.profileEmail}>alaminabdul@gmail.com</Text>
      </View>
    </View>
    <DrawerItemList {...props} />
  </DrawerContentScrollView>
);

// Tab Navigator
const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator initialRouteName="Home" screenOptions={{ tabBarStyle: { backgroundColor: '#333' }, tabBarActiveTintColor: '#fff' }}>
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Explore" component={ExploreScreen} />
    <Tab.Screen name="Library" component={LibraryScreen} />
  </Tab.Navigator>
);

// Drawer Navigator
const Drawer = createDrawerNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="TabNavigator" drawerContent={(props) => <CustomDrawerContent {...props} />}>
        <Drawer.Screen name="TabNavigator" component={TabNavigator} options={{ drawerLabel: 'Home / Explore / Library' }} />
        <Drawer.Screen name="Iris" component={LyricsScreen} initialParams={{ songTitle: 'Iris', lyrics: `And I'd give up forever to touch you
'Cause I know that you feel me somehow
You're the closest to Heaven that I'll ever be
And I don't wanna go home right now
And all I can taste is this moment
And all I can breathe is your life
And sooner or later, it's over
I just don't wanna miss you tonight
And I don't want the world to see me
'Cause I don't think that they'd understand
When everything's made to be broken
I just want you to know who I am
And you can't fight the tears that ain't coming
Or the moment of truth in your lies
When everything feels like the movies
Yeah, you bleed just to know you're alive
And I don't want the world to see me
'Cause I don't think that they'd understand
When everything's made to be broken
I just want you to know who I am
And I don't want the world to see me
'Cause I don't think that they'd understand
When everything's made to be broken
I just want you to know who I am
And I don't want the world to see me
'Cause I don't think that they'd understand
When everything's made to be broken
I just want you to know who I am
I just want you to know who I am
I just want you to know who I am
I just want you to know who I am` }} />
        <Drawer.Screen name="Slide" component={LyricsScreen} initialParams={{ songTitle: 'Slide', lyrics: `Could you whisper in my ear
The things you wanna feel?
I'd give you anything
To feel it comin'
Do you wake up on your own
And wonder where you are?
You live with all your faults
I wanna wake up where you are
I won't say anything at all
So why don't you slide?
Yeah, I'm gonna let it slide
Don't you love the life you killed?
The priest is on the phone
Your father hit the wall
Your ma' disowned you
Don't suppose I'll ever know
What it means to be a man
It's something I can't change
I'll live around it
I wanna wake up where you are
I won't say anything at all
So why don't you slide?
Ooh, slide
And I'll do anything you ever dreamed to be complete
Little pieces of the nothing that fall
Oh, May
Put your arms around me
What you feel is what you are
And what you are is beautiful
Oh, May
Do you wanna get married?
Or run away?
And I'll do anything you ever dreamed to be complete
Little pieces of the nothing that fall
Oh, May
Put your arms around me
What you feel is what you are
And what you are is beautiful
Oh, May
Do you wanna get married?
Or run away?
I wanna wake up where you are
And I won't say anything
And I'll do anythin' you ever dreamed to be complete (yeah, slide)
Little pieces of the nothin' that fall
And I'll do anythin' you ever dreamed to be complete (yeah slide)
Little pieces of the nothin' that fall
(Oh, oh, May)
Yeah, slide between the sheets of all them beds you never knew (yeah, slide)
Why don't you slide into my room?
Just slide into my room
Oh, we'll run away, run away, run away` }} />
        <Drawer.Screen name="Black Balloon" component={LyricsScreen} initialParams={{ songTitle: 'Black Balloon', lyrics: `Baby's black balloon makes her fly
I almost fell into that hole in your life
You're not thinking about tomorrow
'Cause you were the same as me but on your knees
A thousand other boys could never reach you
How could I have been the one?
I saw the world spin beneath you
And scatter like ice from the spoon
That was your womb
Coming down, the world turned over
And angels fall without you there
And I go on as you get colder
Or are you someone's prayer?
You know the lies they always told you
And the love you never knew
Was it things they never showed you?
That swallowed the light from the sun
Inside your room, yeah
Coming down, the world turned over
And Angels fall without you there
And I go on as you get colder
Always someone's prayer
And there's no time left for losing
When you stand, they fall, yeah
Coming down, the world turned over
And angels fall without you there
And I go on as you get colder
All because I'm
Coming down, the years turned over
And Angels fall without you there
And I'll go on and I'll lead you home and
All because I'm
All because I'm
And I'll become what you became to me` }} />
        <Drawer.Screen name="Broadway" component={LyricsScreen} initialParams={{ songTitle: 'Broadway', lyrics: `They say the neon lights are bright on Broadway
They say there's always magic in the air
But when you're walking down that street
And you ain't had enough to eat
The glitter rubs right off and you're nowhere
They say the women treat you right on Broadway
But looking at them just gives me the blues
'Cause how you gonna make some time
When all you got is one thin dime
And one thin dime won't even shine your shoes
They say I won't last too long on Broadway
I'll catch a Greyhound bus for home, they all say
But they're dead wrong, I know they are
'Cause I can play this guitar
And I won't quit 'til I'm a star on Broadway
I won't quit 'til I'm a star on Broadway
No, no, no, no, no
No, I won't quit 'til I'm a star
On Broadway
On Broadway
On Broad
On Broadway
On Broadway
Yeah, yeah, yeah, yeah
On Broadway` }} />
        <Drawer.Screen name="Dizzy" component={LyricsScreen} initialParams={{ songTitle: 'Dizzy', lyrics: `They say the neon lights are bright on Broadway
They say there's always magic in the air
But when you're walking down that street
And you ain't had enough to eat
The glitter rubs right off and you're nowhere
They say the women treat you right on Broadway
But looking at them just gives me the blues
'Cause how you gonna make some time
When all you got is one thin dime
And one thin dime won't even shine your shoes
They say I won't last too long on Broadway
I'll catch a Greyhound bus for home, they all say
But they're dead wrong, I know they are
'Cause I can play this guitar
And I won't quit 'til I'm a star on Broadway
I won't quit 'til I'm a star on Broadway
No, no, no, no, no
No, I won't quit 'til I'm a star
On Broadway
On Broadway
On Broad
On Broadway
On Broadway
Yeah, yeah, yeah, yeah
On Broadway` }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;

// Styles
const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  drawerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#f4f4f4',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  profileEmail: {
    fontSize: 14,
    color: '#777',
  },
  lyricsScroll: {
    flexGrow: 1,
    paddingBottom: 50, // Ensures space for scrolling
  },
  lyricsContainer: {
    padding: 20,
    alignItems: 'center',
  },
  albumArt: {
    width: 120,
    height: 120,
    borderRadius: 10,
    marginBottom: 20,
  },
  songTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
    textAlign: 'center',
  },
  lyricsText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  },
  container: {
    flexGrow: 1,
    padding: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 30,
  },
  subHeader: {
    fontSize: 16,
    color: '#bbb',
    marginBottom: 20,
  },
  songCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  songCardText: {
    fontSize: 16,
    color: '#fff',
  },
});
