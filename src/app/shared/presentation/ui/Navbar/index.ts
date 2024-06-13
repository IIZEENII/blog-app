import { Component, input } from "@angular/core";
import { AvatarComponent } from "../../../../users/presentation/ui/Avatar";

@Component({
    standalone: true,
    selector: 'navbar',
    template: `
        <nav class="navbar">
            <input type="search" name="" id="">
            <button type="button">create +</button>
            <avatar 
                avatar="https://citizensketcher.com/wp-content/uploads/2022/05/thispersondoesnotexist_43-1.jpg" 
                username="Adrian Mis"  
            />
        </nav>
    `,
    styleUrl: "_index.scss",
    imports: [AvatarComponent],
})
export class NavbarComponent {}