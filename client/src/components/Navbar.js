
import React, { useState } from 'react';
import { Menu, Segment } from 'semantic-ui-react'

export default function NavBar() {
  const [activeItem, setactiveItem] = useState("home");
  const handleItemClick = (e, { name }) => setactiveItem(name)

    return (
      <Segment inverted>
        <div     id= "my-header" >
        <Menu inverted pointing secondary>
        <Menu.Item
            name='Home'
            active={activeItem === 'Home'}
            onClick={handleItemClick}
            href="/"
          >
            {/* <img src="https://media.istockphoto.com/id/1395347219/photo/modern-american-real-estate.jpg?b=1&s=170667a&w=0&k=20&c=KJADa6hwzLmJVozTmfxYFmMqQOQgLvHOwBVJloPeGt0="  alt="" /> */}
          </Menu.Item>
          <Menu.Item
            name='Join'
            active={activeItem === 'Join'}
            onClick={handleItemClick}
            href="/Join"
          />
          <Menu.Item
            name='Group'
            active={activeItem === 'Group'}
            onClick={handleItemClick}
            href="/Group"
          />
          <Menu.Item
            name='Events'
            active={activeItem === 'Events'}
            onClick={handleItemClick}
            href="/events"
          />
          <Menu.Item
            name='About'
            active={activeItem === 'About'}
            onClick={handleItemClick}
            href="/About"
          />
           <Menu.Item
            name='Contact'
            active={activeItem === 'Contact'}
            onClick={handleItemClick}
            href="/Contact"
          />
          <Menu.Item
            name='log-out'
            active={activeItem === 'log-out'}
            onClick={handleItemClick}
            href="/logout"
          />

        </Menu>
        </div>
      </Segment>
    )
  
}
