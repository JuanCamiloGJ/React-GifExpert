import { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);
    const onAddCategory = (newcategorie) => {

        if (categories.includes(newcategorie)) return;
        setCategories([newcategorie, ...categories]);
    }
    return (
        <>
            <h1>GifExpertApp</h1>
            {/* {Input} */}
            <AddCategory onNewCategory={onAddCategory} />
            {categories.map(category => <GifGrid key={category} category={category} />)}
        </>
    )
}
