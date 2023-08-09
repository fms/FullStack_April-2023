// Create a class for the platform
class SocialMediaPlatform {
    constructor() {
        this.followers = [];
    }
    // Method to add a new follower
    addFollower(follower) {
        // Check if follower already exists in the list
        const existingFollower = this.followers.find((f) => f.fullName === follower.fullName);
        if (existingFollower) {
            console.log('Follower already exists in the list.');
            return;
        }
        // Add the follower to the list
        this.followers.push(follower);
        this.sortFollowers();
        console.log('Follower added successfully.');
    }
    // Method to remove a follower
    removeFollower(fullName) {
        // Find the index of the follower in the list
        const index = this.followers.findIndex((f) => f.fullName === fullName);
        if (index === -1) {
            console.log('Follower not found in the list.');
            return;
        }
        // Remove the follower from the list
        this.followers.splice(index, 1);
        console.log('Follower removed successfully.');
    }
    // Method to sort followers by their full names in alphabetical order
    sortFollowers() {
        this.followers.sort((a, b) => a.fullName.localeCompare(b.fullName));
    }
    // Method to display the list of followers
    displayFollowers() {
        console.log('List of followers:');
        this.followers.forEach((follower, index) => {
            console.log(`${index + 1}. ${follower.fullName}`);
        });
    }
}
// Usage example
const platform = new SocialMediaPlatform();
// Adding followers
platform.addFollower({
    fullName: 'John Wane Gacy',
    dateOfBirth: '1990-01-01',
    city: 'New York',
    socialNetwork: 'Facebook',
    accountIdentifier: 'johndoe123',
});
platform.addFollower({
    fullName: 'Andrey Chikatilo',
    dateOfBirth: '1995-02-15',
    city: 'Los Angeles',
    socialNetwork: 'Twitter',
    accountIdentifier: 'asmith789',
});
platform.addFollower({
    fullName: 'Ted Bandy',
    dateOfBirth: '1988-09-05',
    city: 'Chicago',
    socialNetwork: 'Instagram',
    accountIdentifier: 'bobj',
});
// Attempting to add existing follower
platform.addFollower({
    fullName: 'John Wane Gacy',
    dateOfBirth: '1990-01-01',
    city: 'New York',
    socialNetwork: 'Facebook',
    accountIdentifier: 'johndoe123',
});
// Removing a follower
platform.removeFollower('John Wane Gacy');
// Displaying the updated list of followers
platform.displayFollowers();
