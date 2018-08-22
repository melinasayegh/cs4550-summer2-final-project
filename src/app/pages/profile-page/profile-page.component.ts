import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserServiceClient} from '../../services/user.service.client';
import {RecipeServiceClient} from '../../services/recipe.service.client';

@Component({
    selector: 'app-profile-page',
    templateUrl: './profile-page.component.html',
    styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

    selectedTab = '';
    profileUser = <any>{};
    myRecipes: [{
        recipe: {
            _id: String
        }
    }];
    faveRecipes: [{
        recipe: {
            _id: String
        }
    }];
    currProfileId = <any>{};
    isOwnProfile: boolean;
    currUser = undefined;
    isFriend: boolean;

    constructor(private router: Router,
                private activatedRoute: ActivatedRoute,
                private userService: UserServiceClient,
                private recipeService: RecipeServiceClient) {
        this.activatedRoute.params.subscribe(params => {
            this.ngOnInit();
        });
    }

    ngOnInit() {
        this.activatedRoute.params.subscribe(params => {
            this.currProfileId = params['userId'];
        });
        this.userService.profile(this.currProfileId).then(profileUser => {
            this.profileUser = profileUser;
            this.faveRecipes = profileUser.favoriteRecipes;
            this.myRecipes = profileUser.myRecipes;

        });
        this.userService.currentUser().then(currUser => {
            this.currUser = currUser;
            if (currUser !== undefined) {
                if (this.currProfileId === currUser._id) {
                    this.isOwnProfile = true;
                } else {
                    this.isOwnProfile = false;
                    this.checkFriendStatus();
                }
         }});
    }

    selectTab = (tab) => {
        this.selectedTab = tab;
    }

    checkFriendStatus() {
        for (var i = 0; i < this.currUser.friends.length; i++) {
            if (this.currUser.friends[i]._id === this.currProfileId) {
                this.isFriend = true;
                break;
            } else {
                this.isFriend = false;
            }
        }
    }

    addFriend(newFriend) {
        const updatedCurrUserFriends = this.currUser.friends.push(newFriend._id)
        const updatedNewFriendFriends = newFriend.friends.push(this.currUser._id);

        const updatedCurrUser = {
            username: this.currUser.username,
            password: this.currUser.password,
            firstName: this.currUser.firstName,
            lastName: this.currUser.lastName,
            email: this.currUser.email,
            isAdmin: this.currUser.isAdmin,
            myRecipes: this.currUser.myRecipes,
            favoriteRecipes: this.currUser.favoriteRecipes,
            reviews: this.currUser.reviews,
            friends: this.currUser.friends
        };

        const updatedNewFriend = {
            username: newFriend.username,
            password: newFriend.password,
            firstName: newFriend.firstName,
            lastName: newFriend.lastName,
            email: newFriend.email,
            isAdmin: newFriend.isAdmin,
            myRecipes: newFriend.myRecipes,
            favoriteRecipes: newFriend.favoriteRecipes,
            reviews: newFriend.reviews,
            friends: newFriend.friends
        };

        this.userService.updateProfile(updatedCurrUser)
            .then(response => {
                return this.userService.updateProfile(updatedNewFriend);
            })
            .then(response => this.ngOnInit());
    }

    unfriend(exfriend) {
        const updatedCurrUser = {
            username: this.currUser.username,
            password: this.currUser.password,
            firstName: this.currUser.firstName,
            lastName: this.currUser.lastName,
            email: this.currUser.email,
            isAdmin: this.currUser.isAdmin,
            myRecipes: this.currUser.myRecipes,
            favoriteRecipes: this.currUser.favoriteRecipes,
            reviews: this.currUser.reviews,
            friends: this.currUser.friends.filter(u => {
                return u._id !== exfriend._id;
            })
        };

        const updatedExFriend = {
            username: exfriend.username,
            password: exfriend.password,
            firstName: exfriend.firstName,
            lastName: exfriend.lastName,
            email: exfriend.email,
            isAdmin: exfriend.isAdmin,
            myRecipes: exfriend.myRecipes,
            favoriteRecipes: exfriend.favoriteRecipes,
            reviews: exfriend.reviews,
            friends: exfriend.friends.filter(u => {
                return u._id !== this.currUser._id;
            })
        };
        this.userService.updateProfile(updatedCurrUser)
            .then(response => {
                return this.userService.updateProfile(updatedExFriend);
            })
            .then(response => this.ngOnInit());

    }

    fixDate = (date) => {
        return new Date(date).toLocaleString();
    }
}
