import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

import { MainComponent } from './components/main.component/main.component'
import { AllPostsComponent } from './components/allPosts.component/allPosts.component'
import { PostPage } from './components/postPage.component/postPage.component'
import { AuthorsComponent } from './components/authors.component/authors.component'
import { Login } from './components/login.component/login.component'
import { Registration } from './components/registration.component/registration.component'
import { NotFoundPageComponent } from './components/notFound/notFoundPage.component'
import { AuthorizedWrapper, NonAuthorizedWrapper } from './components/wrapper/wrapper.component'

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' Component={NonAuthorizedWrapper}>
          <Route index Component={MainComponent} />
          <Route path='posts' Component={AllPostsComponent} />
          <Route path='posts/:postId' Component={PostPage} />
          <Route path='authors' Component={AuthorsComponent} />
        </Route>

        <Route path='/' Component={AuthorizedWrapper}>
          <Route path='login' Component={Login} />
          <Route path='registration' Component={Registration} />
        </Route>

        <Route path='*' Component={NotFoundPageComponent} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
