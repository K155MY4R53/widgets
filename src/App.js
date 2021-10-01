import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/route";
import Header from "./components/Header";

const items = [
    {
        title: "What is Motival?",
        content: "Motival is the app that makes your dreams come true",
    },
    {
        title: "Why use Motival?",
        content: "To get started and keep going",
    },
    {
        title: "How do you use Motival?",
        content: "Enter your goals and stick to the habits",
    },
];

const options = [
    {
        label: "The color red",
        value: "red",
    },
    {
        label: "The color green",
        value: "green",
    },
    {
        label: "A shade of blue",
        value: "blue",
    },
];

const App = () => {
    const [selected, setSelected] = useState(options[0]);

    return (
        <div>
            <Header />

            <Route path="/">
                <Accordion items={items} />
            </Route>
            <Route path="/list">
                <Search />
            </Route>
            <Route path="/dropdown">
                <Dropdown
                    label="Select a colour"
                    options={options}
                    selected={selected}
                    onSelectedChange={setSelected}
                />
            </Route>
            <Route path="/translate">
                <Translate />
            </Route>
        </div>
    );
};

export default App;
