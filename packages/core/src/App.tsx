import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LandingPage } from './StoryPreview';
import { ComponentPage } from './ComponentPage';
import { ComponentStories } from './ComponentStories';
import { ComponentGuide } from './ComponentGuide';
import { MainLayout } from './layouts/MainLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/components" element={<LandingPage />} />

          <Route path="/components/:category/:collection" element={<ComponentPage />}>
            <Route index element={<ComponentStories />} />
            <Route path="stories" element={<ComponentStories />} />
            <Route path="guide" element={<ComponentGuide />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
