import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { PromotionalSmartphonesComponent } from "./promotional/promotional-smartphones.component";
import { PromotionHighlightDirective } from "./promotion-highlight.directive";

@NgModule({
    declarations: [AppComponent, PromotionHighlightDirective, PromotionalSmartphonesComponent],

    imports: [BrowserModule],
    bootstrap: [AppComponent]
})

export class AppModule {

}