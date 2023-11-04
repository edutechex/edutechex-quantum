import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/main-page/home/home.component';
import { HeroComponent } from './pages/main-page/hero/hero.component';
import { EventComponent } from './pages/main-page/event/event.component';
import { CancellationPolicyComponent } from './pages/footer/cancellation-policy/cancellation-policy.component';
import { PrivacyPolicyComponent } from './pages/footer/privacy-policy/privacy-policy.component';
import { TermsConditionComponent } from './pages/footer/terms-condition/terms-condition.component';

const routes: Routes = [
    {
      path:'',
      redirectTo:'/home',
      pathMatch:'full',
    },
    {
      path:'home',
      component:HeroComponent
    },
    {
      path:'event',
      component:EventComponent,
    },
    {
      path:'cancellation-policy',
      component:CancellationPolicyComponent,
    },
    {
      path:'privacy-policy',
      component:PrivacyPolicyComponent,
    },
    {
      path:'terms-and-condition',
      component:TermsConditionComponent,
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true, preloadingStrategy: PreloadAllModules, anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
