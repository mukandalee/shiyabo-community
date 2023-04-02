
import React, { useState, Component } from 'react';
import { Menu, Segment } from 'semantic-ui-react'

export default function NavBar() {
  const [activeItem, setactiveItem] = useState("home");
  const handleItemClick = (e, { name }) => setactiveItem(name)

    return (
      <Segment inverted>
        <div     id= "my-header" >
        <Menu inverted pointing secondary>
        <Menu.Item
            name='Login'
            active={activeItem === 'logo'}
            onClick={handleItemClick}
            href="/"
          >
            {/* <img src="https://media.istockphoto.com/id/1395347219/photo/modern-american-real-estate.jpg?b=1&s=170667a&w=0&k=20&c=KJADa6hwzLmJVozTmfxYFmMqQOQgLvHOwBVJloPeGt0="  alt="" /> */}
          </Menu.Item>
          <Menu.Item
            name='Register'
            active={activeItem === 'SignUp'}
            onClick={handleItemClick}
            href="/SignUp"
          />
            <Menu.Item
            name='ForgotenPassword'
            active={activeItem === 'ForgotenPassword'}
            onClick={handleItemClick}
             href="/ForgotenPassword"
          />
        </Menu>
        </div>
      </Segment>
    )
  
}
