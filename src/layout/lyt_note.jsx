import React from 'react'
import NoteEditor from '../components/NoteEditor'
import { AllNotesIcon, SearchIcon, TrashIcon } from '../Icons/Icons'

export default function LayoutNotes() {
    return (
        <main className='lyt_wrapper_notes'>
            <nav className='wrapper_notes_navBar'>
                <h1 className='notes_navBar_title'>Roaster</h1>
                <ul className='notes_navBar_list'>
                    <li className='navBar_list_item'>
                        <AllNotesIcon />
                        <p className='list_item_text'>All Notes</p>
                    </li>
                    <li className='navBar_list_item'>
                        <TrashIcon />
                        <p className='list_item_text'>Trash</p>
                    </li>
                </ul>
            </nav>

            <section className='wrapper_notes_noteList'>
                <h2 className='notes_noteList_title'>All Notes</h2>

                <form className='notes_noteList_form'>
                    <input type="text"
                        aria-label='Search in notes input field'
                        className='noteList_form_searchFelid' placeholder='Search for notes...' />
                    <button aria-label='Search in notes button' className='noteList_form_searchBtn'>
                        <SearchIcon />
                    </button>
                </form>


                <ul className='notes_noteList_notesList'>
                    {
                        [1, 2, 3, 4, 5, 6, 7, 8].map(item => {
                            return (

                                <li className='noteList_notesList_item'>
                                    <p className='notesList_item_title'>Note title goes here</p>
                                    <p className='notesList_item_content'>Note content will be displayed here</p>
                                </li>)
                        })
                    }
                </ul>
            </section>

            <section className='wrapper_notes_noteArea'>
                <form className='notes_noteArea_noteContent'>

                    {/* <button className='noteArea_noteContent_trashBtn'>
                        <TrashIcon />
                        <p>Move to trash</p>
                    </button> */}


                    <input type="text" className='noteArea_noteContent_title' placeholder='Note title' />

                    <NoteEditor />
                </form>
            </section>
        </main>
    )
}
