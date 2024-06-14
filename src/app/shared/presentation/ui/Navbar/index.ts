import { Component, OnInit, inject } from "@angular/core";
import { AvatarComponent } from "../../../../users/presentation/ui/Avatar";
import { FilledButtonComponent } from "../FilledButton/FilledButton.component";
import { PostsStore } from "../../../../posts/presentation/stores/PostStore";
import { SearchBarComponent } from "../SearchBar/SearchBar.component";
import { RouterLink, RouterOutlet } from "@angular/router";

@Component({
    standalone: true,
    selector: 'navbar',
    template: `
        <nav class="navbar">
            <search-bar />
            <filled-button [onClick]="createPost" [isMini]="true">
                Create <span class="icon-add"></span>
            </filled-button>
            <a routerLink="/account">
                <avatar 
                    avatar="https://citizensketcher.com/wp-content/uploads/2022/05/thispersondoesnotexist_43-1.jpg" 
                    username="Adrian Mis"  
                />
            </a>
        </nav>
    `,
    styleUrl: "_index.scss",
    imports: [AvatarComponent, FilledButtonComponent, SearchBarComponent, RouterLink],
    providers: []
})
export class NavbarComponent implements OnInit {
    postStore: PostsStore = inject(PostsStore);

    ngOnInit(): void {
        this.createPost = this.createPost.bind(this);
    }

    createPost() {
        this.postStore.create({
            id: 1,
            title: 'Welcome to BlogApp',
            content: 'BlogApp is a website programming by me, please, share with yours friends',
            mediaURL: 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg',
            autor: {
                id: 1,
                email: 'zeen.cr@gmail.com',
                username: 'Adrian Mis',
                avatar: 'https://citizensketcher.com/wp-content/uploads/2022/05/thispersondoesnotexist_43-1.jpg',
            }
        })
    }
}