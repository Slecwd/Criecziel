language messages English_United States
set langmenu=en_US.UTF-8  
set backspace=indent,eol,start

colorscheme monokai
syntax on
:set guifont=Consolas:h10
set hlsearch

set autoindent
set smartindent
set shiftwidth=4
set tabstop=4
set guioptions-=m
set guioptions-=T
set guioptions-=l
set guioptions-=r
set guioptions-=L

" Plugin stuff
set runtimepath^=~/.vim/bundle/emmet.vim

" Map :so $MYVIMRC
:inoremap <C-Space> <Esc>:so $MYVIMRC<CR> a
:nnoremap <C-Space> :so $MYVIMRC<CR>

	
hi iCursor guifg=white guibg=white
set guicursor+=i:ver25-iCursor
set guicursor=n-v-c:block-Cursor
set guicursor+=a:blinkon0

set wrap!
set scrolloff=8

set lines=50 columns=1000

" Disable cursor blinking
" Ctrl+B = go to end of line
:inoremap <C-B> <Esc>$a
:nnoremap <C-B> $
:vnoremap <C-B> $

:nnoremap <C-C> "+y
:vnoremap <C-C> "+y
:nnoremap <C-V> "+p
:inoremap <C-V> <Esc>"+pi

" Ctrl+backspace = delete prev. word
" :imap <C-BS> <Esc>bdwi
:inoremap <C-BS> <C-W>

" Ctrl+S = save
:inoremap <C-S> <Esc>:w<CR>a
:nnoremap <C-S> :w<CR>

" Ctrl+Z = undo, Ctrl+Y = redo
:inoremap <C-Z> <Esc>ua
:nnoremap <C-Z> u
:inoremap <C-Y> <Esc><C-R>ua
:nnoremap <C-Y> <C-R>u

" Ctrl+Tab = switch window
:inoremap <C-Tab> <Esc><C-W><C-W>
:nnoremap <C-Tab> <C-W><C-W>
:vnoremap <C-Tab> <Esc><C-W><C-W>

" Space in normal mode = insert blank space
" :nnoremap <Space> i<Space><Right><Esc>
" Enter in normal mode = insert eol
:nnoremap <CR> i<CR><Esc>
" Backspace in normal mode = delete
:nnoremap <BS> i<BS><Right><Esc>
" C-BS in normal mode = delete word
:nnoremap <C-BS> i<C-W><Right><Esc>

" ´` and `´ in insert mode = enter normal mode
:inoremap ´j <Esc>
:vnoremap ´j <Esc>

" Esc = do nothing
:inoremap <Esc> <nop>
:vnoremap <Esc> <nop>

" Ctrl + alt + up/down = swap lines
:nnoremap <C-M-Up> <Up>ddp<Up>
:inoremap <C-M-Up> <Esc><Up>ddp<Up>i
:nnoremap <C-M-Down> ddp
:inoremap <C-M-Down> <Esc>ddpi

" (n) Space = insert mode
:nnoremap <Space> i

" (n)(i) Alt+up/down = delete line up/down
:nnoremap <M-up> <Up>dd
:inoremap <M-up> <Esc><Up>ddi
:nnoremap <M-down> <Down>dd<Up>
:inoremap <M-down> <Esc><Down>dd<Up>i

" paste leaves cursor in the right position
:nnoremap p p<Up>

" Avoid touching arrows in normal mode...
:inoremap <Up> <Esc>
:nnoremap <Up> ´
:inoremap <Down> <Esc>
:nnoremap <Down> ´
:inoremap <Left> <Esc>
:nnoremap <Left> ´
:inoremap <Right> <Esc>
:nnoremap <Right> ´

" Move with C-HJKL in insert mode!!
:inoremap <C-h> <Left>
:inoremap <C-j> <Down>
:inoremap <C-k> <Up>
:inoremap <C-l> <Right>

" Highlight special words
:hi NOTE_Highlight ctermbg=205 guifg=green3 ctermfg=black gui=bold
:call matchadd('NOTE_Highlight', '\<NOTE\>')

:hi TODO_Highlight guibg=bg guifg=red gui=bold
:call matchadd('TODO_Highlight', '\<TODO\>')

