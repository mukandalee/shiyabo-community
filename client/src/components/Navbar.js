
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
            name='logo'
            active={activeItem === 'logo'}
            onClick={handleItemClick}
            href="/"
          >
            <img src="https://media.istockphoto.com/id/1395347219/photo/modern-american-real-estate.jpg?b=1&s=170667a&w=0&k=20&c=KJADa6hwzLmJVozTmfxYFmMqQOQgLvHOwBVJloPeGt0="  alt="" />
          </Menu.Item>
          <Menu.Item
            name='Members'
            active={activeItem === 'Members'}
            onClick={handleItemClick}
            href="/members"
          />
          <Menu.Item
            name='Events'
            active={activeItem === 'Events'}
            onClick={handleItemClick}
            href="/events"
          />
        </Menu>
        </div>
      </Segment>
    )
  
}
